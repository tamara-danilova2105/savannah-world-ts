import { memo } from "react";
import { Cat } from "../../model/types/cat";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { CatCard } from "../CatCard/CatCard";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface CatListProps {
    cats?: Cat[];
    isCatalog?: boolean;
    isLoading?: boolean;
    skeletons: number;
};

export const CatList = memo((props: CatListProps) => {
    const {
        cats,
        isCatalog = false,
        isLoading,
        skeletons,
    } = props;

    const getSkeletons = () =>
        new Array(skeletons).fill(0).map((_, index) => (
            <Skeleton key={index} />
        ));

    if (!isLoading && !cats?.length) {
        return (
            <Stack justify='center' align='start'>
                <Text>
                    Не найдено - FIX LATER
                </Text>
            </Stack>
        )
    };

    return (
        <>
            {cats?.map(cat => (
                <CatCard
                    key={cat._id}
                    cat={cat}
                    isCatalog={isCatalog}
                />
            ))}
            {isLoading && getSkeletons()}
        </>
    );
});