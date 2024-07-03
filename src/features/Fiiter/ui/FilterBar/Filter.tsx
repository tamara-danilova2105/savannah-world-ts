import { dataFilter } from "../../lib/data";
import styles from './Filter.module.scss';
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import { FilterItem } from "../Filter/Filter";

export const Filter = () => {
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
};