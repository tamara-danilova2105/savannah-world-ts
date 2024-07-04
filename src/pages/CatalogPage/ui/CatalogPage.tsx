import { Filter } from "@/features/Fiiter";
import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
    return (
        <main className={styles.main}>
            <Filter />
        </main>
    );
};

export default CatalogPage;
