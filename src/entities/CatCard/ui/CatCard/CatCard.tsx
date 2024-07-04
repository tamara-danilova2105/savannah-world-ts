import { Text } from '@/shared/ui/Text/Text';
import { KittensMock } from '../../lib/data'
import { Stack } from '@/shared/ui/Stack/Stack';
import { Button } from '@/shared/ui/Button/Button';
import { arrowIcon } from '@/shared/assets/svg/arrowIcons';
import styles from './CatCard.module.scss';

interface CatCardProps {
    kitten: KittensMock;
    isMain?: boolean;
    onClick?: () => void;
}

export const CatCard = (props: CatCardProps) => {
    const { images, name_cat, generate, sex, age, shipment } = props.kitten;
    const { isMain, onClick } = props;

    return (
        <Stack
            direction='column'
            align='start'
            gap='4'
            className={styles.catCard}
        >
            <img 
                className={styles.images} 
                src={images} alt='котята Саванны' 
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
            <Button
                className={styles.btn}
                onClick={onClick}
            >
                {isMain ? 'в каталог' : 'подробнее'} {arrowIcon()}
            </Button>
        </Stack>
    )
}