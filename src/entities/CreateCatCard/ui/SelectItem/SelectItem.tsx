import { getFilterText } from '@/features/Filter/lib/data';
import { ListBox } from '@/shared/ui/ListBox/ListBox';
import { memo, useCallback } from 'react';
import styles from './SelectItem.module.scss';
import { useSelector } from 'react-redux';
import { CatCard } from '@/features/Cats/model/types/cat';
import { getCatCard } from '@/features/Cats';

interface SelectItemProps { 
    filter: string;
    options: string[];
    setForm?: (filter: string, option: string) => void;
};

export const SelectItem = memo((props: SelectItemProps) => {
    const { filter, options, setForm } = props;

    const cat = useSelector(getCatCard);
    const selected = cat[filter as keyof CatCard];
    
    const changeSelect = useCallback((option: string) => {
        setForm?.(filter, option);
    }, [filter, setForm]);

    return (
        <ListBox
            filter={selected === '' ? getFilterText(filter) : selected}
            options={options}
            selected={selected}
            changeSelect={changeSelect}
            className={styles.listbox}
        />
    );
});
