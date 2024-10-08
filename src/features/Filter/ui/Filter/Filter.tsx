import { memo, useCallback, useMemo, useState } from "react";
import { FilterBar } from "../FilterBar/FilterBar";
import styles from './Filter.module.scss';
import { FilterDrawer } from "../FilterDrawer/FilterDrawer";
import { filterIcon } from "@/shared/assets/svg/filterIcon";
import { useAppSelector } from "@/app/providers/store/config/hooks";
import { selectFilterParams } from "../../model/selectors/selectors";
import { Badge } from "@/shared/ui/Badge";
import { Drawer } from "@/shared/ui/Drawer";

export const Filter = memo(() => {
    const [isOpen, setIsOpen] = useState(false);
    const filterParams = useAppSelector(selectFilterParams);
    
    const toggleDrawer = useCallback(() => {
        setIsOpen(isOpen => !isOpen)
    }, []);

    const totalFilter = useMemo(() => {
        return Object.values(filterParams)
            .reduce((total, array) => total + array.length, 0);
    }, [filterParams]);

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
                {totalFilter > 0 &&
                    <Badge 
                        count={totalFilter} 
                        className={styles.margin}
                    />
                }
                <Drawer
                    isOpen={isOpen}
                    close={toggleDrawer}
                >
                    <FilterDrawer close={toggleDrawer} />
                </Drawer>
            </div>
        </div>
    );
});
