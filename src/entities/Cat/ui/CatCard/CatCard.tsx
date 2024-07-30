import { Text } from '@/shared/ui/Text/Text';
import { Stack } from '@/shared/ui/Stack/Stack';
import { Button } from '@/shared/ui/Button/Button';
import { arrowIcon } from '@/shared/assets/svg/arrowIcons';
import { apiUrl } from '@/shared/api/api';
import { memo } from 'react';
import { Cat } from '../../model/types/cat';
import { editIcon } from '@/shared/assets/svg/editIcon';
import { deleteIcon } from '@/shared/assets/svg/deleteIcon';
import { useDeleteCatMutation } from '@/pages/CatalogPage/api/api';
import styles from './CatCard.module.scss';

interface CatCardProps {
    cat: Cat;
    isCatalog?: boolean;
    onClick?: () => void;
};

export const CatCard = memo((props: CatCardProps) => {
    const { _id, image, name_cat, generate, sex, age, shipment } = props.cat;
    const { isCatalog, onClick } = props;

    const [deleteCat, { isLoading, error }] = useDeleteCatMutation();

    const deleteCatCard = async () => {
        try {
            await deleteCat(_id).unwrap();
        } catch (err) {
            console.error("Failed to delete cat:", err);
        }
    };


    return (
        <Stack
            direction='column'
            align='start'
            gap='4'
            className={styles.catCard}
        >
            <img
                className={styles.images}
                src={`${apiUrl}/uploads/${image}`} alt='котята Саванны'
            />
            <Text size="l" className={styles.name}>
                {name_cat}
            </Text>
            <Text size="s" className={styles.text}>
                Группа: {generate}
            </Text>
            <Text size="s" className={styles.text}>
                Пол: {sex}
            </Text>
            <Text size="s" className={styles.text}>
                Возраст: {age}
            </Text>
            <Text size="s" className={styles.text}>
                Статус: {shipment}
            </Text>
            {isCatalog &&
                <Button
                    className={styles.btn}
                    onClick={onClick}
                >
                    подробнее {arrowIcon()}
                </Button>
            }
            {/* FIX LATER */}
            {
                isCatalog &&
                <div className={styles.edit}>
                    {editIcon()}
                    <Button
                        className={styles.delete}
                        onClick={deleteCatCard}
                    >
                        {deleteIcon()}
                    </Button>
                </div>
            }

        </Stack>
    );
});
