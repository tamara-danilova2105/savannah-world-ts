import { memo } from "react";
import banner from '@/shared/assets/images/banner.png';
import styles from './Navbar.module.scss';
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";

export const Navbar = memo(() => {
    return (
        <header className={styles.header}>
            <img
                className={classNames(styles.images, {}, [])}
                src={banner} alt="savannah"
            />
            <nav className={classNames(styles.navbar, {}, [])}>
                NAVBAR
                NAVBAR
                NAVBAR
            </nav>
            <Button className={styles.button}>В КАТАЛОГ</Button>
        </header>
    );
});