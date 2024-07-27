import { Stack } from '@/shared/ui/Stack/Stack';
import styles from './FilterDrawerItem.module.scss';
import { getFilterText } from '../../lib/data';
import { Checkbox } from '@/shared/ui/CheckBox/CheckBox';
import { Text } from '@/shared/ui/Text/Text';
import { memo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/providers/store/config/hooks';
import { setFilter } from '../../model/slices/slice';

interface FilterDrawerItemProps {
    filter: string;
    options: string[];
}

export const FilterDrawerItem = memo((props: FilterDrawerItemProps) => {
    const { filter, options} = props;
    const dispatch = useAppDispatch();
    const selected = useAppSelector(state => state.filter[filter]);

    const handleSelect = useCallback((option: string) => {
        dispatch(setFilter({ filter, option }))
    }, [dispatch, filter])
    
    return (
        <Stack
            direction='column'
            align='start'
            gap="8"
            className={styles.filter}
        >
            <Text tag="h3" size='m'>
                {getFilterText(filter)}:
            </Text>

            {options.map(option =>
                <Stack key={option} gap="16">
                    <Checkbox
                        nameField={option}
                        idInput={option}
                        checked={selected.includes(option)}
                        onChange={() => handleSelect(option)}
                    />
                    <Text>{option}</Text>
                </Stack>
            )}
        </Stack>
    );
});
