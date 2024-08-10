import { ChangeEvent, memo } from 'react';
import styles from './UploadImage.module.scss';
import { downloadIcon } from '@/shared/assets/svg/downloadIcon';
import { Input } from '@/shared/ui/Input';

interface UploadImageProps {
    uploadFileFromDisk: (e: ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | null;
    setIsCrop: (croped: boolean) => void;
}

export const UploadImage = memo((props: UploadImageProps) => {
    const { 
        uploadFileFromDisk, 
        imagePreview, 
        setIsCrop
    } = props;

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        uploadFileFromDisk(e);
        setIsCrop(true);
    };

    return (
        <div className={styles.upload_container}>
            {downloadIcon()}
            <Input
                type='file'
                className={styles.input}
                accept="image/*, .png, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .tif, .tiff, .bmp, .ico, .cur, .gif, .webp, .pdf, .svg, .webm, .avi, .mpeg, .mp4"
                onChange={handleInput}
            />
            {imagePreview &&
                <img src={imagePreview} alt="preview" className={styles.image} />
            }
        </div>
    );
});