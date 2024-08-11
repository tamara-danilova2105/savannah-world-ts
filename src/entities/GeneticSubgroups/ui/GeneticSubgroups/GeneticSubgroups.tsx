import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/ui/Text';
import { geneticSubgroupsData } from '../../libs/data';
import { SubgroupsItem } from '../SubgroupsItem/SubgroupsItem';
import { HeaderSection } from '@/shared/ui/HeaderSection';
import { getRouteCatalog } from '@/shared/const/router';
import styles from './GeneticSubgroups.module.scss';

export const GeneticSubgroups = () => {

    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate(getRouteCatalog());
    }, [navigate]);

    return (
        <Stack
            tag='section'
            direction='column'
            align='start'
            gap='48'
            className={styles.section}
        >
            <HeaderSection 
                section="Подгруппы"
                hasButton
                handleClick={handleClick}
                button='купить котенка'
            >
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
