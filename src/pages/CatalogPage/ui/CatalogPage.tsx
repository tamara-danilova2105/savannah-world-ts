import { Filter } from "@/features/Filter";
import styles from './CatalogPage.module.scss';
import { CatList } from "@/entities/Cat";
import { HeaderSection } from "@/shared/ui/HeaderSection";
import { Text } from "@/shared/ui/Text/Text";
import { useGetCatsQuery } from "../api/api";
import { Button } from "@/shared/ui/Button/Button";
import { useModal } from "@/shared/hooks/useModal";
import { CreateCatCard } from "@/widgets/CreateCatCard";
import { useAppSelector } from "@/app/providers/store/config/hooks";
import { useMemo } from "react";
import { Stack } from "@/shared/ui/Stack/Stack";

const CatalogPage = () => {
    const [changeCreateModal, drawCreateModal] = useModal();

    const filterParams = useAppSelector(state => ({
        generate: state.filter.generate,
        sex: state.filter.sex,
        age: state.filter.age,
        shipment: state.filter.shipment,
        page: 1, //FIX LATER
    }));

    const params = useMemo(() => {
        return Object.fromEntries(
            Object.entries(filterParams).map(([key, value]) => {
                if (Array.isArray(value)) {
                    return [key, value.join(',')];
                }
                return [key, value];
            })
        );
    }, [filterParams]);

    const {
        data: { cats, totalCount } = {},
        error,
        isLoading
    } = useGetCatsQuery(params);
    console.log(cats, totalCount);


    return (
        <main className={styles.main}>
            {/* FIX LATER */}
            {drawCreateModal(
                <CreateCatCard changeCreateModal={changeCreateModal} />
            )}

            <HeaderSection section="Продаются котята">
                <Text tag="h2" size='xl' className={styles.title}>
                    Котята <span>готовые стать</span> частью семьи
                </Text>
            </HeaderSection>
            <Filter />
            {
                error
                    ? <div>Не найдено - FIX LATER</div>
                    : <Stack
                        gap="32" justify='between'
                        className={styles.catlist}
                    >
                        <CatList 
                            cats={cats} 
                            isLoading={isLoading} 
                            skeletons={6}
                        />
                    </Stack>
                    
            }

            {/* FIX LATER */}
            <Button onClick={changeCreateModal}>создать</Button>
        </main>
    );
};

export default CatalogPage;
