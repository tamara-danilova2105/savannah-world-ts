import { Stack } from '@/shared/ui/Stack/Stack';
import styles from './CreateCatCard.module.scss';
import { ChangeEvent, useCallback, useState } from 'react';
import { EnterDetails } from '../EnterDetails/EnterDetails';
import { CropImage } from '../CropImage/CropImage';
import { apiUrl } from '@/shared/api/api';
import { CatCard } from '@/features/Cats/model/types/cat';

interface CreateCatCardProps {
    changeCreateModal: () => void;
    image?: string;
}

export const CreateCatCard = (props: CreateCatCardProps) => {
    const { 
        changeCreateModal, 
        image,
    } = props;

    const [isCrop, setIsCrop] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(
        image ? `${apiUrl}/uploads/${image}` : null
    );
    
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>("");

    const uploadFileFromDisk = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFile(file);
            setFileName(file.name);

            const fileUrl = URL.createObjectURL(file);
            setImagePreview(fileUrl);
        } else {
            setImagePreview(null);
        }
    }, [setFile, setFileName, setImagePreview]);

    const setCroppedFile = useCallback(async (dataUrl: string) => {
        try {
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            const file = new File([blob], `${fileName}`, { type: "image/png" });
            setFile(file);
            setImagePreview(dataUrl);
        } catch (error) {
            console.error("Ошибка при преобразовании dataUrl в файл:", error);
        }
    }, [setFile, setImagePreview, fileName]);

    return (
        <Stack
            justify='center'
            direction="column"
            gap='32'
            className={styles.create}
        >
            {!isCrop
                ? <EnterDetails
                    changeCreateModal={changeCreateModal}
                    imagePreview={imagePreview}
                    uploadFileFromDisk={uploadFileFromDisk}
                    file={file}
                    setIsCrop={setIsCrop}
                />
                : <CropImage
                    imagePreview={imagePreview}
                    setCroppedFile={setCroppedFile}
                    setIsCrop={setIsCrop}
                />
            }
        </Stack>
    );
};
