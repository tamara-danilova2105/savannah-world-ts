import { Filter } from "@/features/Fiiter";
import styles from './CatalogPage.module.scss';
import { CatList } from "@/entities/Cat";
import { HeaderSection } from "@/shared/ui/HeaderSection";
import { Text } from "@/shared/ui/Text/Text";
import { useGetCatsQuery } from "../api/api";

const CatalogPage = () => {
    const { data: cats, error, isLoading } = useGetCatsQuery({});

    return (
        <main className={styles.main}>
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
        </main>
    );
};

export default CatalogPage;
