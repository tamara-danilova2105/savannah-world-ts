import { Text } from '@/shared/ui/Text/Text';
import { Stack } from '@/shared/ui/Stack/Stack';
import { Button } from '@/shared/ui/Button/Button';
import { arrowIcon } from '@/shared/assets/svg/arrowIcons';
import { apiUrl } from '@/shared/api/api';
import { memo } from 'react';
import { Cat } from '../../model/types/cat';
import styles from './CatCard.module.scss';
import { DeleteCat } from '../DeleteCat/DeleteCat';
import { useAuth } from '@/shared/hooks/useAuth';
import { EditCat } from '../EditCat/EditCat';

interface CatCardProps {
    cat: Cat;
    isCatalog?: boolean;
    onClick?: () => void;
};

export const CatCard = memo((props: CatCardProps) => {
    const { _id, image, name_cat, generate, sex, age, shipment } = props.cat;
    const { isCatalog, onClick } = props;
    const { isAuth } = useAuth();

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
            {
                (isCatalog && isAuth) &&
                <div className={styles.admin}>
                    <EditCat cat={props.cat} />
                    <DeleteCat id={_id} />
                </div>
            }
        </Stack>
    );
});
