import { ListBox } from "@/shared/ui/ListBox/ListBox";
import { dataFilter } from "../../libs/data";
import styles from './Filter.module.scss';
import { Stack } from "@/shared/ui/Stack/Stack";

export const Filter = () => {
    return (
        <Stack
            justify='between'
            className={styles.container}
        >
            {
                Object.entries(dataFilter)
                    .map(([filter, options]) =>
                        <ListBox filter={filter} options={options} />
                    )
            }
        </Stack>
    );
};