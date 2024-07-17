import { ChangeEvent, memo } from 'react';
import styles from './UploadImage.module.scss';
import { downloadIcon } from '@/shared/assets/svg/downloadIcon';
import { Input } from '../Input/Input';

interface UploadImageProps {
    uploadFileFromDisk: (e: ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | null;
}

export const UploadImage = memo((props: UploadImageProps) => {
    const { uploadFileFromDisk, imagePreview } = props;

    return (
        <div className={styles.upload_container}>
            {downloadIcon()}
            <Input
                type='file'
                className={styles.input}
                accept="image/*, .png, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .tif, .tiff, .bmp, .ico, .cur, .gif, .webp, .pdf, .svg, .webm, .avi, .mpeg, .mp4"
                onChange={uploadFileFromDisk}
            />
            {imagePreview &&
                <img src={imagePreview} alt="preview" className={styles.image} />
            }
        </div>
    );
});