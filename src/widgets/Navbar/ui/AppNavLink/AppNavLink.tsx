import { AppRoutesProps } from "@/shared/type/router"
import { NavLink } from "react-router-dom";

interface Styles {
    [key: string]: string;
};

interface AppNavLinkProps {
    route: AppRoutesProps;
    styles: Styles;
    isDefaultStyle?: boolean;
};

export const AppNavLink = (props: AppNavLinkProps) => {
    const { route, styles, isDefaultStyle = false } = props;
    return (
        <NavLink
            key={route.path}
            className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.opened_page : (isDefaultStyle ? styles.default : '')}`
            }
            to={route.path}
        >
            {route.navlink}
            {route.icon}
        </NavLink>
    );
};
