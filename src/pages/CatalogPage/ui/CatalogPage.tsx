import { HeaderSection } from "@/shared/ui/HeaderSection";
import { Text } from "@/shared/ui/Text/Text";
import { SearchCats } from '@/widgets/SearchCats';
import styles from './CatalogPage.module.scss';
import { AddNewCatCard } from "@/features/AddNewCatCard";

const CatalogPage = () => {
    return (
        <main className={styles.main}>
            <AddNewCatCard />
            <HeaderSection section="Продаются котята">
                <Text tag="h2" size='xl' className={styles.title}>
                    Котята <span>готовые стать</span> частью семьи
                </Text>
            </HeaderSection>

            <SearchCats />
        </main>
    );
};

export default CatalogPage;
