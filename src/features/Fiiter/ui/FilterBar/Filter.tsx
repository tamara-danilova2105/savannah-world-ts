import { ListBox } from "@/shared/ui/ListBox/ListBox";
import { dataFilter } from "../../lib/data";
import styles from './Filter.module.scss';
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";

export const Filter = () => {
    return (
        <Stack
            justify='between'
            className={styles.container}
        >
            {
                Object.entries(dataFilter)
                    .map(([filter, options]) =>
                        <ListBox key={filter} filter={filter} options={options} />
                    )
            }
            <Button variant='secondary'>
                сбросить
            </Button>
        </Stack>
    );
};