import { useModal } from '@/shared/hooks/useModal';
import styles from './NavbarMobile.module.scss';
import { useAppRoutes } from '@/shared/hooks/useAppRoutes';
import { routeConfig } from '@/app/providers/router/config/routerConfig';
import { Signin } from '@/features/Signin';
import { signinIcon } from '@/shared/assets/svg/navbarIcons';
import { AppNavLink } from '../AppNavLink/AppNavLink';
import { useAuth } from '@/shared/hooks/useAuth';

export const NavbarMobile = () => {
    const [changeSigninModal, drawSigninModal] = useModal();
    const routes = useAppRoutes(routeConfig, true);
    const { isAuth, logout } = useAuth();
    
    const handleClick = () => {
        if (isAuth) logout();
        else changeSigninModal();     
    }

    return (
        <div className={styles.container}>
            {drawSigninModal(
                <Signin changeSigninModal={changeSigninModal} />
            )}

            <nav className={styles.navbar}>
                {
                    routes.map(route => (
                        <AppNavLink
                            key={route.path}
                            route={route}
                            styles={styles}
                            isDefaultStyle={true}
                        />
                    ))
                }
                <button
                    className={styles.button}
                    onClick={handleClick}
                >
                    {isAuth ? 'выйти' : 'войти'}
                    {signinIcon()}
                </button>
            </nav>
        </div>
    );
};
