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

const CatalogPage = () => {
    const [changeCreateModal, drawCreateModal] = useModal();

    const filterParams = useAppSelector(state => ({
        generate: state.filter.generate,
        sex: state.filter.sex,
        age: state.filter.age,
        shipment: state.filter.shipment,
    }));
    
    const params = useMemo(() => Object.fromEntries(
        Object.entries(filterParams)
            .map(([k, v]) => [k, v?.join(',')])
    ), [filterParams]);

    const { data: cats, error, isLoading } = useGetCatsQuery(params);

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
                    : <CatList cats={cats} isLoading={isLoading} />
            }

            {/* FIX LATER */}
            <Button onClick={changeCreateModal}>создать</Button>
        </main>
    );
};

export default CatalogPage;
