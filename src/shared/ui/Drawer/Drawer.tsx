import { memo, ReactNode } from "react";
import styles from './Drawer.module.scss';
import { closeIcon } from "@/shared/assets/svg/closeIcon";
import { Stack } from "../Stack/Stack";

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
                <Stack justify='end' className={styles.button_container}>
                    <button
                        onClick={close}
                        className={styles.button}
                    >
                        {closeIcon()}
                    </button>
                </Stack>
                {children}
            </div>
        </>
    );
});