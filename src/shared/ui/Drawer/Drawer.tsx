import { memo, ReactNode } from "react";
import styles from './Drawer.module.scss';

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    close: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const { children, isOpen, close } = props;

    return (
        <>
            {isOpen &&
                <div
                    className={styles.overlay}
                    onClick={close}
                />
            }
            <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
                <button onClick={close}>close</button>
                {children}
            </div>
        </>
    );
});