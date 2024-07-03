import { filters } from '@/features/Fiiter/lib/data';
import { ListBox } from '@/shared/ui/ListBox/ListBox';
import { memo, useCallback, useState } from 'react';

interface SelectItemProps { 
    filter: string;
    options: string[];
};

export const SelectItem = memo((props: SelectItemProps) => {
    const { filter, options } = props;

    const [selected, setSelected] = useState<string>('');

    const changeSelect = useCallback((option: string) => {
        setSelected(option)
    }, []);

    const getFilterText = (filter: string) => {
        return filters[filter]
    };

    return (
        <ListBox
            filter={getFilterText(filter)}
            options={options}
            selected={selected}
            changeSelect={changeSelect}
        />
    )
})