import { memo, useCallback } from 'react';
import { getFilterText } from '../../lib/data';
import { ListBox } from '@/shared/ui/ListBox/ListBox';
import styles from './FilterItem.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/store/config/hooks';
import { setFilter } from '../../model/slices/slice';

interface FilterProps {
    filter: string;
    options: string[];
}

export const FilterItem = memo((props: FilterProps) => {
    const { filter, options } = props;
    const dispatch = useAppDispatch();
    const selected = useAppSelector(state => state.filter[filter]);

    const handleSelect = useCallback((option: string) => {
        dispatch(setFilter({ filter, option }))
    }, [dispatch, filter])

    return (
        <ListBox
            filter={getFilterText(filter)}
            options={options}
            selected={selected}
            changeSelect={handleSelect}
            badge
            className={styles.listbox}
        />
    )
});
