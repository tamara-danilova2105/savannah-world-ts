import { memo } from 'react';
import { getFilterText } from '../../lib/data';
import { ListBox } from '@/shared/ui/ListBox/ListBox';
import useFilter from '@/shared/hooks/useFilter';
import styles from './FilterItem.module.scss';

interface FilterProps {
    filter: string;
    options: string[];
}

export const FilterItem = memo((props: FilterProps) => {
    const { filter, options } = props;
    const { selected, changeSelect } = useFilter();

    return (
        <ListBox
            filter={getFilterText(filter)}
            options={options}
            selected={selected}
            changeSelect={changeSelect}
            badge
            className={styles.listbox}
        />
    )
});
