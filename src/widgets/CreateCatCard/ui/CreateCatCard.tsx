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
import { downloadIcon } from '@/shared/assets/svg/downloadIcon';
import { Input } from '@/shared/ui/Input/Input';
import { arrowIcon } from '@/shared/assets/svg/arrowIcons';

interface CreateCatCardProps {
    changeCreateModal: () => void;
}

export const CreateCatCard = ({ changeCreateModal }: CreateCatCardProps) => {
    const cat = useSelector(getCatCard);
    const dispatch = useAppDispatch();
    const [saveCat] = useSaveCatMutation();
    const [uploadFile] = useUploadFileMutation();
    const [file, setFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [disabled, setDisabled] = useState(true);
    const [statusReq, setStatusReq] = useState({text: '', isError: false});

    const uploadFileFromDisk = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFile(file);

            const fileUrl = URL.createObjectURL(file);
            setImagePreview(fileUrl);
        } else {
            setImagePreview(null);
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
                images: fileResponse.url.split('/')[2]
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
                <div className={styles.images_container}>
                    {downloadIcon()}
                    <Input
                        type='file'
                        className={styles.input}
                        accept="image/*, .png, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .tif, .tiff, .bmp, .ico, .cur, .gif, .webp, .pdf, .svg, .webm, .avi, .mpeg, .mp4"
                        onChange={uploadFileFromDisk}
                    />
                    {imagePreview &&
                        <img src={imagePreview} alt="preview" className={styles.previewImage} />
                    }
                </div>
                <div>
                    <FormCatCard setForm={setFormData} />
                    <Button
                        onClick={handleSaveCat}
                        disabled={disabled}
                        className={styles.button}
                    >
                        сохранить
                        {arrowIcon()}
                    </Button>
                    <Text className={`${styles.text} ${statusReq.isError ? styles.error : styles.default}`}>
                        {statusReq.text}
                    </Text>
                </div>
            </Stack>
        </Stack>
    );
};
