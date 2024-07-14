import { memo } from "react";
import { Cat } from "../../model/types/cat";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { CatCard } from "../CatCard/CatCard";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import styles from './CatList.module.scss';

interface CatListProps {
    cats?: Cat[];
    isLoading?: boolean;
};

const getSkeletons = () =>
    new Array(6)
        .fill(0)
        .map((_, index) => (
            <Skeleton key={index} />
        ));

export const CatList = memo((props: CatListProps) => {
    const {
        cats,
        isLoading,
    } = props;

    if (!isLoading && !cats?.length) {
        <Stack justify='center' align='start'>
            <Text>
                Не найдено - FIX LATER
            </Text>
        </Stack>
    }

    return (
        <Stack
            gap="32" justify='between'
            className={styles.catlist}
        >
            {cats?.map(cat => (
                <CatCard
                    key={cat._id}
                    kitten={cat}
                    isCatalog
                />
            ))}
            {isLoading && getSkeletons()}
        </Stack>
    );
});