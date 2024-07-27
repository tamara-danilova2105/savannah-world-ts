import { memo } from "react";
import styles from './FilterDrawer.module.scss';
import { Text } from "@/shared/ui/Text/Text";
import { dataFilter } from "../../lib/data";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import { FilterDrawerItem } from "../FilterDrawerItem/FilterDrawerItem";
import { useAppDispatch } from "@/app/providers/store/config/hooks";
import { resetFilter } from "../../model/slices/slice";

interface FilterDrawerProps {
    close: () => void;
}

export const FilterDrawer = memo(({ close }: FilterDrawerProps) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(resetFilter());
    };

    return (
        <Stack
            direction='column'
            gap="16"
            align='start'
            className={styles.main}
        >
            <Text tag="h2" size='l'>Фильтры</Text>

            {Object.entries(dataFilter)
                .map(([filter, options]) =>
                    <FilterDrawerItem 
                        key={filter} 
                        filter={filter} 
                        options={options} 
                    />
                )}

            <Stack
                direction='column'
                gap="16" max
                className={styles.button_container}
            >
                <Button 
                    className={styles.button}
                    onClick={close}
                >
                    применить
                </Button>
                <Button
                    variant='secondary'
                    className={styles.button}
                    onClick={handleClick}
                >
                    сбросить
                </Button>
            </Stack>
        </Stack>
    );
});