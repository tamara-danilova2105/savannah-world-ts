import { Text } from '@/shared/ui/Text/Text';
import styles from './EnterDetails.module.scss';
import closeIcon from '@/shared/assets/images/close.png';
import { Stack } from '@/shared/ui/Stack/Stack';
import { Button } from '@/shared/ui/Button/Button';
import { arrowIcon } from '@/shared/assets/svg/arrowIcons';
import { useAppDispatch } from '@/app/providers/store/config/hooks';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSaveCatMutation, useUpdateCatMutation, useUploadFileMutation } from '@/widgets/SearchCats/api/api';
import { UploadImage } from '../UploadImage/UploadImage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { getCatCard, resetCatCard, setCatCard } from '../../../../features/Cats/model/slices/slice';
import { FormCatCard } from '../FormCatCard/FormCatCard';

interface EnterDetailsProps {
    imagePreview: string | null;
    file: File | null;
    isCreate?: boolean;
    id?: string
    changeCreateModal: () => void;
    uploadFileFromDisk: (e: ChangeEvent<HTMLInputElement>) => void;
    setIsCrop: (croped: boolean) => void;
}

export const EnterDetails = (props: EnterDetailsProps) => {
    const {
        imagePreview,
        file,
        isCreate,
        id,
        changeCreateModal,
        uploadFileFromDisk,
        setIsCrop,
    } = props;

    const dispatch = useAppDispatch();
    const cat = useSelector(getCatCard);
    const [saveCat, { isLoading: isSaving }] = useSaveCatMutation();
    const [updateCat, { isLoading: isUpdating }] = useUpdateCatMutation();
    const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation();
    const [statusReq, setStatusReq] = useState({ text: '', isError: false });
    const [disabled, setDisabled] = useState(true);
    const isLoading = isSaving || isUploading || isUpdating;

    const resetFormData = () => {
        changeCreateModal();
        dispatch(resetCatCard());
    };

    const setFormData = useCallback((key: string, value: string) => {
        dispatch(setCatCard({ key, value }))
    }, [dispatch]);

    useEffect(() => {
        const isEmpty = Object.values(cat).every(value => value !== '');
        setDisabled(!isEmpty || (!file && !imagePreview));
    }, [cat, file, imagePreview]);

    const handleSaveCat = async () => {
        try {
            if (isCreate) {
                const fileResponse = await uploadFile(file).unwrap();
                const updatedCat = {
                    ...cat,
                    image: fileResponse.url.split('/')[2]
                };
                await saveCat(updatedCat).unwrap();

            } else {
                if (file) {
                    const fileResponse = await uploadFile(file).unwrap();
                    const updatedCat = {
                        ...cat,
                        image: fileResponse.url.split('/')[2]
                    };
                    await updateCat({id, ...updatedCat}).unwrap();
                } else {
                    await updateCat({id, ...cat}).unwrap();
                }               
            }
            
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
                {isCreate ? 'Создать карточку питомца' : 'Обновить карточку питомца'}
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
