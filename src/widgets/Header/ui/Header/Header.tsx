import { useLocation } from "react-router";
import { HeaderMain } from "../HeaderMain/HeaderMain";
import { HeaderSecondary } from "../HeaderSecondary/HeaderSecondary";

export const Header = () => {
    const location = useLocation();

    return (
        <>
            {
                location.pathname === '/'
                    ? <HeaderMain />
                    : <HeaderSecondary />
            }
        </>
    );
};