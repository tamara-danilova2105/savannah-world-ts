import { Filter } from "@/features/Fiiter";
import styles from './CatalogPage.module.scss';
import { CatList } from "@/entities/Cat";
import { kittensMock } from "@/entities/Cat/lib/data";
import { HeaderSection } from "@/shared/ui/HeaderSection";
import { Text } from "@/shared/ui/Text/Text";

const CatalogPage = () => {
    return (
        <main className={styles.main}>
            <HeaderSection section="Продаются котята">
                <Text tag="h2" size='xl' className={styles.title}>
                    Котята <span>готовые стать</span> частью семьи
                </Text>
            </HeaderSection>
            <Filter />
            <CatList cats={kittensMock} />
        </main>
    );
};

export default CatalogPage;
