import { Text } from '@/shared/ui/Text/Text';
import { KittensMock } from '../../libs/data'
import styles from './CatCard.module.scss'
import { Stack } from '@/shared/ui/Stack/Stack';

interface CatCardProps {
    kitten: KittensMock;
}

export const CatCard = (props: CatCardProps) => {
    const { images, name_cat, generate, sex, age, shipment } = props.kitten;

    return (
        <Stack
            direction='column'
            align='start'
            gap='4'
            className={styles.catCard}
        >
            <img className={styles.images} src={images} alt='котята Саванны' />
            <Text size="l" className={styles.name}>
                {name_cat}
            </Text>
            <Text size="m" className={styles.text}>
                Цвет: {generate}
            </Text>
            <Text size="m" className={styles.text}>
                Пол: {sex}
            </Text>
            <Text size="m" className={styles.text}>
                Возраст: {age}
            </Text>
            <Text size="m" className={styles.text}>
                Статус: {shipment}
            </Text>
        </Stack>
    )
}