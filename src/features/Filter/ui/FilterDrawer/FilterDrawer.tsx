import { memo } from "react";
import styles from './FilterDrawer.module.scss';
import { Text } from "@/shared/ui/Text/Text";
import { dataFilter, getFilterText } from "../../lib/data";
import { Checkbox } from "@/shared/ui/CheckBox/CheckBox";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import useFilter from "@/shared/hooks/useFilter";

export const FilterDrawer = memo(() => {
    const { selected, changeSelect } = useFilter();

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
                    <Stack
                        key={filter}
                        direction='column'
                        align='start'
                        gap="8"
                        className={styles.filter}
                    >
                        <Text tag="h3" size='m'>
                            {getFilterText(filter)}:
                        </Text>

                        {options.map(option =>
                            <Stack key={option} gap="16">
                                <Checkbox
                                    nameField={option}
                                    idInput={option}
                                    checked={selected.includes(option)}
                                    onChange={() => changeSelect(option)}
                                />
                                <Text>{option}</Text>
                            </Stack>
                        )}
                    </Stack>
                )}

            <Stack
                direction='column'
                gap="16" max
                className={styles.button_container}
            >
                <Button className={styles.button}>
                    применить
                </Button>
                <Button
                    variant='secondary'
                    className={styles.button}
                >
                    сбросить
                </Button>
            </Stack>
        </Stack>
    );
});