import { dataFilter } from "../../lib/data";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import { FilterItem } from "../FilterItem/FilterItem";
import { memo } from "react";
import { useAppDispatch } from "@/app/providers/store/config/hooks";
import { resetFilter } from "../../model/slices/slice";

export const FilterBar = memo(() => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(resetFilter());
    };
    
    return (
        <Stack justify='between'>
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
            <Button
                variant='secondary'
                onClick={handleClick}
            >
                сбросить
            </Button>
        </Stack>
    );
});
