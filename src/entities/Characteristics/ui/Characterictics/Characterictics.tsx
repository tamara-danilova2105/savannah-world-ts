import { Stack } from '@/shared/ui/Stack/Stack';
import { Text } from '@/shared/ui/Text/Text';
import check from '../../../../shared/assets/images/check.png';
import { characteristicsData } from '../../lib/data';

import styles from './Characterictics.module.scss';

export const Characterictics = () => {
    return (
        <Stack
            tag='section'
            direction='column'
            gap='32'
            className={styles.section}
        >
            <Text tag="h2" size="xl" className={styles.title}>
                ХАРАКТЕРИСТИКИ САВАНН
            </Text>

            <ul className={styles.block}>
                {
                    characteristicsData.map(characteristic => {
                        return (
                            <Text tag='li' className={styles.text}>
                                <img className={styles.images} src={check} alt="icon" />
                                {characteristic}
                            </Text>
                        )
                    })
                }
            </ul>
        </Stack>
    );
};
