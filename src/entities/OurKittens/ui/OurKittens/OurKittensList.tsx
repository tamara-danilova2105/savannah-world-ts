import { Stack } from '@/shared/ui/Stack/Stack';
import styles from './OurKittensList.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { kittensMock } from '@/entities/CarCard/lib/data';
import { CatCard } from '@/entities/CarCard';
import { useCallback } from 'react';

export const OurKittens = () => {

    const handleClick = useCallback(() => {
        console.log('в каталог');       
    }, []);

    return (
        <Stack
            tag='section'
            direction='column'
            gap='32'
            className={styles.section}
        >
            <Text tag="h2" size="xl" className={styles.title}>
                НАШИ КОТЯТА
            </Text>
            <Stack
                justify='between' max
                className={styles.card}
            >
                {
                    kittensMock.map(kitten =>
                        <CatCard
                            key={kitten.id}
                            kitten={kitten}
                            isMain
                            onClick={handleClick}
                        />)
                }
            </Stack>
        </Stack>
    );
};