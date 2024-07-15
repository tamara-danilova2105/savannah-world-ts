import { Stack } from '@/shared/ui/Stack/Stack';
import styles from './CreateCatCard.module.scss';
import { FormCatCard } from '@/features/FormCatCard';
import closeIcon from '@/shared/assets/images/close.png';
import { Text } from '@/shared/ui/Text/Text';
import { useAppDispatch } from '@/app/providers/store/config/hooks';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getCatCard, resetCatCard, setCatCard } from '../model/slices/slice';

interface CreateCatCardProps {
    changeCreateModal: () => void;
}

export const CreateCatCard = ({ changeCreateModal }: CreateCatCardProps) => {
    const cat = useSelector(getCatCard);
    const dispatch = useAppDispatch();

    console.log(cat);
    
    const setFormData = useCallback((key: string, value: string) => {
        dispatch(setCatCard({key, value}))
    }, [dispatch]);

    const resetFormData = () => {
        changeCreateModal();
        dispatch(resetCatCard());
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

            <FormCatCard setForm={setFormData} />
        </Stack>
    );
};
