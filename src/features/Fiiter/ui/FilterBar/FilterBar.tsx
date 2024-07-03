import { dataFilter } from "../../lib/data";
import styles from './FilterBar.module.scss';
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import { FilterItem } from "../FilterItem/FilterItem";
import { memo } from "react";

export const FilterBar = memo(() => {
    return (
        <Stack
            justify='between'
            className={styles.container}
        >
            {
                Object.entries(dataFilter)
                    .map(([filter, options]) =>
                        <FilterItem
                            key={filter}
                            filter={filter} 
                            options={options}
                        />
                    )
            }
            <Button variant='secondary'>
                сбросить
            </Button>
        </Stack>
    );
});
