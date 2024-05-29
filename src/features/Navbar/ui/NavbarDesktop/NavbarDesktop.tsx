import { routeConfig } from '@/app/providers/router/config/routerConfig';
import styles from './NavbarDesktop.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '@/shared/ui/Button/Button';
import { useModal } from '@/shared/hooks/useModal';
import { Signin } from '@/features/Signin';

export const NavbarDesktop = () => {
    const [changeSigninModal, drawSiginModal] = useModal();

    return (
        <>
            {drawSiginModal(
                <Signin changeSigninModal={changeSigninModal} />
            )}

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
                            {route.icon}
                        </NavLink>
                    ))
                }

                <Button
                    onClick={changeSigninModal}
                    className={styles.buttonSigin}
                    variant="secondary"
                >
                    войти
                </Button>
            </nav>
        </>
    );  
};