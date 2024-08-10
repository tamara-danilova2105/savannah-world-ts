import { SearchCats } from '@/widgets/SearchCats';
import styles from './CatalogPage.module.scss';
import { AddNewCatCard } from "@/features/AddNewCatCard";
import { useScrollToTop } from '@/shared/hooks/useScrollToTop';

const CatalogPage = () => {
    useScrollToTop();

    return (
        <main className={styles.main}>
            <AddNewCatCard />
            <SearchCats />
        </main>
    );
};

export default CatalogPage;
