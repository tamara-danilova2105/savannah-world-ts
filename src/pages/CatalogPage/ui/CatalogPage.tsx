import { SearchCats } from '@/widgets/SearchCats';
import styles from './CatalogPage.module.scss';
import { AddNewCatCard } from "@/features/AddNewCatCard";

const CatalogPage = () => {
    return (
        <main className={styles.main}>
            <AddNewCatCard />
            <SearchCats />
        </main>
    );
};

export default CatalogPage;
