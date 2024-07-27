import { ChangeEvent, memo, useState } from 'react';
import styles from './UploadImage.module.scss';
import { downloadIcon } from '@/shared/assets/svg/downloadIcon';
import { Input } from '../Input/Input';
import Cropper from 'react-easy-crop'

interface UploadImageProps {
    uploadFileFromDisk: (e: ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | null;
}

export const UploadImage = memo((props: UploadImageProps) => {
    const { uploadFileFromDisk, imagePreview } = props;
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    return (
        <div className={styles.upload_container}>
            {downloadIcon()}

            {imagePreview &&
                <Cropper
                    image={imagePreview}
                    crop={crop}
                    zoom={zoom}
                    aspect={3 / 4}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    style={{
                        containerStyle: { width: '300px', height: '400px', position: 'relative' }
                    }}
                />
            }
            <Input
                type='file'
                accept="image/*, .png, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .tif, .tiff, .bmp, .ico, .cur, .gif, .webp, .pdf, .svg, .webm, .avi, .mpeg, .mp4"
                onChange={uploadFileFromDisk}
            />
        </div>
    );
});