import { memo } from "react";
import { Cat } from "../../model/types/cat";
import { Text } from "@/shared/ui/Text/Text";
import { CatCard } from "../CatCard/CatCard";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import styles from './CatList.module.scss';

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
            <Text size="m" className={styles.text}>
                Мы не нашли котят по вашему запросу. Попробуйте позже или измените критерии поиска.
            </Text>
        );
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