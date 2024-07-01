import { Filter } from "@/features/Fiiter";
import styles from './CatalogPage.module.scss';
import { BrowserView, MobileView } from "react-device-detect";
import { filterIcon } from "@/shared/assets/svg/filterIcon";

export const CatalogPage = () => {
    return (
        <main className={styles.main}>
            <BrowserView>
                <Filter />
            </BrowserView>
            <MobileView>
                {filterIcon()}
            </MobileView>
        </main>
    );
};
