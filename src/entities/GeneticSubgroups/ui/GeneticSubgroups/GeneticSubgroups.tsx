import { Stack } from '@/shared/ui/Stack/Stack';
import styles from './GeneticSubgroups.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { geneticSubgroupsData } from '../../libs/data';
import { SubgroupsItem } from '../SubgroupsItem/SubgroupsItem';
import { HeaderSection } from '@/shared/ui/HeaderSection';

export const GeneticSubgroups = () => {
    return (
        <Stack
            tag='section'
            direction='column'
            align='start'
            gap='48'
            className={styles.section}
        >
            <HeaderSection section="Подгруппы">
                <Text tag="h2" size='xl' className={styles.title}>
                    <span>Генетические подгруппы</span> породы саванна
                </Text>
            </HeaderSection>

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
