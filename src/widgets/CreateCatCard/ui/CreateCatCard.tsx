import { Stack } from '@/shared/ui/Stack/Stack';
import styles from './CreateCatCard.module.scss';
import { FormCatCard } from '@/features/FormCatCard';
import closeIcon from '@/shared/assets/images/close.png';
import { Text } from '@/shared/ui/Text/Text';
import { useAppDispatch } from '@/app/providers/store/config/hooks';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCatCard, resetCatCard, setCatCard } from '@/features/FormCatCard';
import { Button } from '@/shared/ui/Button/Button';
import { useSaveCatMutation, useUploadFileMutation } from '@/pages/CatalogPage/api/api';
import { arrowIcon } from '@/shared/assets/svg/arrowIcons';
import { UploadImage } from '@/features/UploadImage';

interface CreateCatCardProps {
    changeCreateModal: () => void;
}

export const CreateCatCard = ({ changeCreateModal }: CreateCatCardProps) => {
    const cat = useSelector(getCatCard);
    const dispatch = useAppDispatch();
    const [saveCat, { isLoading: isSaving }] = useSaveCatMutation();
    const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation();
    const [file, setFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>("");
    const [disabled, setDisabled] = useState(true);
    const [statusReq, setStatusReq] = useState({ text: '', isError: false });
    const isLoading = isSaving || isUploading;

    const uploadFileFromDisk = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFile(file);
            setFileName(file.name);

            const fileUrl = URL.createObjectURL(file);
            setImagePreview(fileUrl);
        } else {
            setImagePreview(null);
        }
    };

    const setCroppedFile = async (dataUrl: string) => {
        try {
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            const file = new File([blob], `${fileName}`, { type: "image/png" });
            setFile(file);
            setImagePreview(dataUrl);
        } catch (error) {
            console.error("Ошибка при преобразовании dataUrl в файл:", error);
        }
    };

    useEffect(() => {
        const isEmpty = Object.values(cat).every(value => value !== '');
        setDisabled(!isEmpty || !file);
    }, [cat, file]);

    const setFormData = useCallback((key: string, value: string) => {
        dispatch(setCatCard({ key, value }))
    }, [dispatch]);

    const resetFormData = () => {
        changeCreateModal();
        dispatch(resetCatCard());
    };

    const handleSaveCat = async () => {
        try {
            const fileResponse = await uploadFile(file).unwrap();
            const updatedCat = {
                ...cat,
                image: fileResponse.url.split('/')[2]
            };
            await saveCat(updatedCat).unwrap();
            setStatusReq({
                text: "Карточка питомца сохранена успешно",
                isError: false,
            });
        } catch (error) {
            setStatusReq({
                text: "Произошла ошибка, попробуй еще раз",
                isError: true,
            });
        }
    };

    return (
        <Stack
            justify='center'
            direction="column"
            gap='32'
            className={styles.create}
        >
            <img
                className={styles.closeButton}
                src={closeIcon} alt="закрыть"
                onClick={resetFormData}
            />
            <Text tag='h3' size='l' className={styles.title}>
                Создать карточку питомца
            </Text>

            <Stack
                gap='32'
                className={styles.editSection}
            >
                <UploadImage
                    uploadFileFromDisk={uploadFileFromDisk}
                    imagePreview={imagePreview}
                    setCroppedFile={setCroppedFile}
                />
                <div>
                    <FormCatCard setForm={setFormData} />
                    <Button
                        onClick={handleSaveCat}
                        disabled={disabled}
                        className={styles.button}
                    >
                        сохранить 
                        {isLoading
                            ? <span className={styles.loader} />
                            : <>{arrowIcon()}</>
                        }
                    </Button>
                    <Text className={`${styles.text} ${statusReq.isError ? styles.error : styles.default}`}>
                        {statusReq.text}
                    </Text>
                </div>
            </Stack>
        </Stack>
    );
};
