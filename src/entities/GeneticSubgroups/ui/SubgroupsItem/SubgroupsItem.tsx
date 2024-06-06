import { Text } from '@/shared/ui/Text/Text';
import { GeneticSubgroup } from '../../libs/data';
import styles from './SubgroupsItem.module.scss';

interface GeneticSubgroupsProps {
    subgroup: GeneticSubgroup;
};

export const SubgroupsItem = ({ subgroup }: GeneticSubgroupsProps) => {
    return (
        <Text
            tag="li"
            className={styles.item}
        >
            <div className={styles.container}>
                <span className={styles.title}>
                    {subgroup.title}
                </span>
                <span className={styles.text}>
                    {subgroup.text}
                </span>
            </div>

            {subgroup.img}
        </Text>
    );
};
