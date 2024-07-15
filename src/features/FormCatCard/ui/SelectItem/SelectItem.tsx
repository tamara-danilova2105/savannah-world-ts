import { getFilterText } from '@/features/Fiiter/lib/data';
import { ListBox } from '@/shared/ui/ListBox/ListBox';
import { memo, useCallback, useState } from 'react';

interface SelectItemProps { 
    filter: string;
    options: string[];
    setForm?: (filter: string, option: string) => void;
};

export const SelectItem = memo((props: SelectItemProps) => {
    const { filter, options, setForm } = props;
    
    const [selected, setSelected] = useState<string>('');
    
    const changeSelect = useCallback((option: string) => {
        setSelected(option);
        setForm?.(filter, option);
    }, [filter, setForm]);

    return (
        <ListBox
            filter={selected === '' ? getFilterText(filter) : selected}
            options={options}
            selected={selected}
            changeSelect={changeSelect}
        />
    )
})