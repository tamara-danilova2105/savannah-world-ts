import { memo } from "react";
import styles from './Navbar.module.scss';
import { routeConfig } from "@/app/providers/router/config/routerConfig";
import { NavLink } from "react-router-dom";

export const Navbar = memo(() => {
    return (
        <nav className={styles.navbar}>
            {
                Object.values(routeConfig)
                .filter(route => !route.adminOnly)
                .map(route => (
                    <NavLink
                        key={route.path}
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.opened_page : styles.default}`
                        }
                        to={route.path}
                    >
                        {route.navlink}
                    </NavLink>
                ))
            }
        </nav>
    );
});
