import { Stack } from '@/shared/ui/Stack/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { characteristicsData } from '../../lib/data';
import styles from './Characterictics.module.scss';
import { checkIcon } from '@/shared/assets/svg/checkIcon';
import { HeaderSection } from '@/shared/ui/HeaderSection';

export const Characterictics = () => {
    return (
        <Stack
            tag='section'
            direction='column'
            gap='48'
            align='start'
            className={styles.section}
        >
            <HeaderSection section="О породе">
                <Text tag="h2" size='xl' className={styles.title}>
                    <span>Характеристика кошек</span> породы саванна
                </Text>
            </HeaderSection>

            <ul className={styles.block}>
                {
                    characteristicsData.map((characteristic, index) => {
                        return (
                            <Text key={index} tag='li' className={styles.text}>
                                <span>{checkIcon()}</span>
                                {characteristic}
                            </Text>
                        )
                    })
                }
            </ul>
        </Stack>
    );
};
