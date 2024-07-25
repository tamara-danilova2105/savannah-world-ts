import { ChangeEvent, memo } from 'react';
import styles from './FormCatCard.module.scss';
import { dataFilter } from '@/features/Filter/lib/data';
import { SelectItem } from '../SelectItem/SelectItem';
import { Stack } from '@/shared/ui/Stack/Stack';
import { Input } from '@/shared/ui/Input/Input';

interface FormCatCardProps {
    setForm?: (filter: string, option: string) => void;
};

export const FormCatCard = memo(({ setForm }: FormCatCardProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm?.(name, value);
    }

    return (
        <form className={styles.form}>
            <Input
                placeholder="имя"
                required
                name='name_cat'
                onChange={handleChange}
            />

            <Stack
                justify='between'
                gap="16"
                className={styles.select}
            >
                {
                    Object.entries(dataFilter)
                        .map(([filter, options]) =>
                            <SelectItem
                                key={filter}
                                filter={filter}
                                options={options}
                                setForm={setForm}
                            />
                        )
                }
            </Stack>
        </form>
    );
});
