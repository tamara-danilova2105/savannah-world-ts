import { routeConfig } from '@/app/providers/router/config/routerConfig';
import styles from './NavbarDesktop.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { useModal } from '@/shared/hooks/useModal';
import { Signin } from '@/features/Signin';
import { useAppRoutes } from '@/shared/hooks/useAppRoutes';
import { AppNavLink } from '../AppNavLink/AppNavLink';

export const NavbarDesktop = () => {
    const [changeSigninModal, drawSiginModal] = useModal();
    const routes = useAppRoutes(routeConfig);

    return (
        <>
            {drawSiginModal(
                <Signin changeSigninModal={changeSigninModal} />
            )}

            <nav className={styles.navbar}>
                {
                    routes.map(route => (
                        <AppNavLink
                            key={route.path}
                            route={route}
                            styles={styles}
                        />
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