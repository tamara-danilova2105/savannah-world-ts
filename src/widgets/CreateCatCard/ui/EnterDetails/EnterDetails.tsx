import { Text } from '@/shared/ui/Text/Text';
import styles from './EnterDetails.module.scss';
import closeIcon from '@/shared/assets/images/close.png';
import { Stack } from '@/shared/ui/Stack/Stack';
import { FormCatCard, getCatCard, resetCatCard, setCatCard } from '@/entities/FormCatCard';
import { Button } from '@/shared/ui/Button/Button';
import { arrowIcon } from '@/shared/assets/svg/arrowIcons';
import { useAppDispatch } from '@/app/providers/store/config/hooks';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSaveCatMutation, useUploadFileMutation } from '@/pages/CatalogPage/api/api';
import { UploadImage } from '../UploadImage/UploadImage';
import { Loader } from '@/shared/ui/Loader/Loader';

interface EnterDetailsProps {
    changeCreateModal: () => void;
    imagePreview: string | null;
    uploadFileFromDisk: (e: ChangeEvent<HTMLInputElement>) => void;
    file: File | null;
    setIsCrop: (croped: boolean) => void;
}

export const EnterDetails = (props: EnterDetailsProps) => {
    const {
        changeCreateModal,
        imagePreview,
        uploadFileFromDisk,
        file,
        setIsCrop,
    } = props;

    const dispatch = useAppDispatch();
    const cat = useSelector(getCatCard);
    const [saveCat, { isLoading: isSaving }] = useSaveCatMutation();
    const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation();
    const [statusReq, setStatusReq] = useState({ text: '', isError: false });
    const [disabled, setDisabled] = useState(true);
    const isLoading = isSaving || isUploading;

    const resetFormData = () => {
        changeCreateModal();
        dispatch(resetCatCard());
    };

    const setFormData = useCallback((key: string, value: string) => {
        dispatch(setCatCard({ key, value }))
    }, [dispatch]);

    useEffect(() => {
        const isEmpty = Object.values(cat).every(value => value !== '');
        setDisabled(!isEmpty || !file);
    }, [cat, file]);

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
        <>
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
                    setIsCrop={setIsCrop}
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
                            ? <Loader />
                            : <>{arrowIcon()}</>
                        }
                    </Button>
                    <Text className={`${styles.text} ${statusReq.isError ? styles.error : styles.default}`}>
                        {statusReq.text}
                    </Text>
                </div>
            </Stack>
        </>
    );
};