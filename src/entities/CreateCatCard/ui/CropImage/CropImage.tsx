import styles from './CropImage.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';
import { arrowIcon } from '@/shared/assets/svg/arrowIcons';
import { memo, SyntheticEvent, useRef, useState } from 'react';
import ReactCrop, { centerCrop, convertToPixelCrop, Crop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

interface CropImageProps {
    imagePreview: string | null;
    setCroppedFile: (dataUrl: string) => void;
    setIsCrop: (croped: boolean) => void;
};

const WIDTH = 300;
const HEIGHT = 400;
const ASPECT = 3 / 4;

export const CropImage = memo((props: CropImageProps) => {
    const { 
        imagePreview,
        setCroppedFile,
        setIsCrop,
    } = props;

    const imgRef = useRef<HTMLImageElement | null>(null);    
    const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const [crop, setCrop] = useState<Crop | undefined>(undefined);

    const onImageLoad = (e: SyntheticEvent<HTMLImageElement>) => {
        const { width, height } = e.currentTarget;
        const cropWidthPecent = (WIDTH / width) * 100;
        const cropHeightPecent = (HEIGHT / height) * 100;
        const crop = makeAspectCrop(
            {
                unit: '%',
                width: cropWidthPecent,
                height: cropHeightPecent,
            }, ASPECT, width, height
        );
        const centeredCrop = centerCrop(crop, width, height)
        setCrop(centeredCrop);
    }

    const setCanvasPreview = (
        image: HTMLImageElement, 
        canvas: HTMLCanvasElement, 
        crop: Crop,
    ) => {
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("No 2d context");
        }  
        const pixelRatio = window.devicePixelRatio;
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
        canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

        ctx.scale(pixelRatio, pixelRatio);
        ctx.imageSmoothingQuality = "high";
        ctx.save();

        const cropX = crop.x * scaleX;
        const cropY = crop.y * scaleY;

        ctx.translate(-cropX, -cropY);
        ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, image.naturalWidth, image.naturalHeight);

        ctx.restore();
    };

    const handleClick = () => {
        if (crop && imgRef.current && previewCanvasRef.current) {
            setCanvasPreview(
                imgRef.current,
                previewCanvasRef.current,
                convertToPixelCrop(
                    crop,
                    imgRef.current.width,
                    imgRef.current.height
                ),
            );
            const dataUrl = previewCanvasRef.current.toDataURL();
            setCroppedFile(dataUrl);
            setIsCrop(false);
        };
    };

    return (
        <>
            <Text tag='h3' size='l' className={styles.title}>
                Кадрировать фотографию
            </Text>
            {imagePreview && 
                <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    keepSelection
                    aspect={ASPECT}
                    minWidth={WIDTH}
                    minHeight={HEIGHT}
                >
                    <img 
                        src={imagePreview} 
                        alt='Котята Саванна' 
                        ref={imgRef}
                        className={styles.image}
                        onLoad={onImageLoad} 
                    />
                </ReactCrop>
            }
            <Button 
                className={styles.button}
                onClick={handleClick}
            >
                сохранить
                {arrowIcon()}
            </Button>
            {crop && <canvas className={styles.canvas} ref={previewCanvasRef} />}
        </>
    );
});
