import { Filter } from "@/features/Fiiter";
import styles from './CatalogPage.module.scss';
import { CatList } from "@/entities/Cat";
import { kittensMock } from "@/entities/Cat/ui/CatCard/lib/data";

const CatalogPage = () => {
    return (
        <main className={styles.main}>
            <Filter />
            <CatList cats={kittensMock} />
        </main>
    );
};

export default CatalogPage;
