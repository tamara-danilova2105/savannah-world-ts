import { Stack } from '@/shared/ui/Stack/Stack';
import styles from './GeneticSubgroups.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { geneticSubgroupsData } from '../../libs/data';
import { SubgroupsItem } from '../SubgroupsItem/SubgroupsItem';

export const GeneticSubgroups = () => {
    return (
        <Stack
            tag='section'
            direction='column'
            gap='32'
            className={styles.section}
        >
            <Text tag="h2" size="xl" className={styles.title}>
                ГЕНЕТИЧЕСКИЕ ПОДГРУППЫ <strong>САВАНН</strong>
            </Text>
            <ul className={styles.container}>
                {
                    geneticSubgroupsData.map(subgroup =>
                        <SubgroupsItem
                            key={subgroup.title}
                            subgroup={subgroup}
                        />
                    )
                }
            </ul>
        </Stack>
    );
};
