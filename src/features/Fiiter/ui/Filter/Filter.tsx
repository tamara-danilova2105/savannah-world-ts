import { memo, useCallback, useState } from "react";
import { FilterBar } from "../FilterBar/FilterBar";
import styles from './Filter.module.scss';
import { FilterDrawer } from "../FilterDrawer/FilterDrawer";
import { Drawer } from "@/shared/ui/Drawer/Drawer";
import { filterIcon } from "@/shared/assets/svg/filterIcon";

export const Filter = memo(() => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = useCallback(() => {
        setIsOpen(isOpen => !isOpen)
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.filterDesktop}>
                <FilterBar />
            </div>
            <div className={styles.filterMobile}>
                <button
                    className={styles.button}
                    onClick={toggleDrawer}
                >
                    {filterIcon()}
                </button>
                <Drawer
                    isOpen={isOpen}
                    close={toggleDrawer}
                >
                    <FilterDrawer />
                </Drawer>
            </div>
        </div>
    );
});
