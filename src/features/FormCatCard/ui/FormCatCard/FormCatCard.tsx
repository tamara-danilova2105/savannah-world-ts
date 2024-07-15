import { memo } from 'react';
import styles from './FormCatCard.module.scss';
import { dataFilter } from '@/features/Fiiter/lib/data';
import { SelectItem } from '../SelectItem/SelectItem';
import { Stack } from '@/shared/ui/Stack/Stack';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { downloadIcon } from '@/shared/assets/svg/downloadIcon';

interface FormCatCardProps {
    setForm?: (filter: string, option: string) => void;
}

export const FormCatCard = memo(({ setForm }: FormCatCardProps) => {

    const handleChange = (key: string) => (value: string) => {
        setForm?.(key, value);
    };

    return (
        <Stack
            gap='32'
            className={styles.editSection}
        >
            <div className={styles.images_container}>
                {downloadIcon()}
                <Input
                    type='file'
                    className={styles.input}
                />
            </div>

            <form className={styles.form}>
                <Input
                    placeholder="имя"
                    required
                    onChange={(value) => handleChange('name_cat')(value)}
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

                <Button className={styles.button}>
                    сохранить
                </Button>
            </form>
        </Stack>
    );
});
