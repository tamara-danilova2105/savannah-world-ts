import { ChangeEvent, FormEvent, memo } from 'react';
import styles from './FormCatCard.module.scss';
import { dataFilter } from '@/features/Filter/lib/data';
import { SelectItem } from '../SelectItem/SelectItem';
import { Stack } from '@/shared/ui/Stack';
import { useSelector } from 'react-redux';
import { getCatCard } from '@/features/Cats';
import { Input } from '@/shared/ui/Input';

interface FormCatCardProps {
    setForm?: (filter: string, option: string) => void;
};

export const FormCatCard = memo(({ setForm }: FormCatCardProps) => {

    const cat = useSelector(getCatCard);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm?.(name, value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                placeholder="имя"
                required
                name='name_cat'
                onChange={handleChange}
                defaultValue={cat['name_cat']}
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
