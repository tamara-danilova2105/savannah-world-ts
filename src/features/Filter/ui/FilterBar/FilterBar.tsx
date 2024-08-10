import { memo } from "react";
import { dataFilter } from "../../lib/data";
import { Stack } from "@/shared/ui/Stack";
import { FilterItem } from "../FilterItem/FilterItem";
import { useAppDispatch } from "@/app/providers/store/config/hooks";
import { resetFilter } from "../../model/slices/slice";
import { Button } from "@/shared/ui/Button";

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
