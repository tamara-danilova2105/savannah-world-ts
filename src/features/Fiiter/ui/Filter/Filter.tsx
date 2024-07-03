import { memo, useCallback, useState } from 'react';
import { filters } from '../../lib/data';
import { ListBox } from '@/shared/ui/ListBox/ListBox';

interface FilterProps {
    filter: string;
    options: string[];
}

export const FilterItem = memo((props: FilterProps) => {
    const { filter, options } = props;

    const [selected, setSelected] = useState<string[]>([]);

    const changeSelect = useCallback((option: string) => {
        setSelected(
            selected.includes(option)
                ? selected.filter(item => item !== option)
                : [...selected, option]
        )
    }, [selected]);

    const getFilterText = (filter: string) => {
        return filters[filter]
    };

    return (
        <ListBox
            filter={getFilterText(filter)}
            options={options}
            selected={selected}
            changeSelect={changeSelect}
            badge
        />
    )
});
