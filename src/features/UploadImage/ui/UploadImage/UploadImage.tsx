import { ChangeEvent, memo } from 'react';
import styles from './UploadImage.module.scss';
import { downloadIcon } from '@/shared/assets/svg/downloadIcon';
import { Input } from '../../../../shared/ui/Input/Input';
import { useModal } from '@/shared/hooks/useModal';
import { CropModal } from '../CropModal/CropModal';

interface UploadImageProps {
    uploadFileFromDisk: (e: ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | null;
    setCroppedFile: (dataUrl: string) => void; 
}

export const UploadImage = memo((props: UploadImageProps) => {
    const { 
        uploadFileFromDisk, 
        imagePreview, 
        setCroppedFile 
    } = props;
    const [changeCropModal, drawCropModal] = useModal();

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        uploadFileFromDisk(e);
        changeCropModal();
    };

    return (
        <div className={styles.upload_container}>
            {drawCropModal(
                <CropModal 
                    imagePreview={imagePreview} 
                    changeCropModal={changeCropModal}
                    setCroppedFile={setCroppedFile}
                />
            )}
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