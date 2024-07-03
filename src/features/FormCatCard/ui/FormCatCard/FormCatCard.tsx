import { memo } from 'react';
import styles from './FormCatCard.module.scss';
import { dataFilter } from '@/features/Fiiter/lib/data';
import { SelectItem } from '../SelectItem/SelectItem';

export const FormCatCard = memo(() => {
    return (
        <div className={styles.formcatcard}>
            {
                Object.entries(dataFilter)
                    .map(([filter, options]) =>
                        <SelectItem
                            key={filter}
                            filter={filter}
                            options={options}
                        />
                    )
            }
        </div>
    )
})