import styles from './Navbar.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { useModal } from '@/shared/hooks/useModal';
import { Signin } from '@/features/Signin';
import { useAppRoutes } from '@/shared/hooks/useAppRoutes';
import { routeConfig } from '@/app/providers/router/config/routerConfig';
import { AppNavLink } from '../AppNavLink/AppNavLink';

export const Navbar = () => {
    const [changeSigninModal, drawSiginModal] = useModal();
    const routes = useAppRoutes(routeConfig);

    return (
        <>
            {drawSiginModal(
                <Signin changeSigninModal={changeSigninModal} />
            )}

            <div className={styles.contact_container}>
                <div className={styles.contact}>
                    <div>+999 888-77-66</div>
                    <div>savannahworld@gmail.com</div>
                </div>
                <div>
                    иконки соцсетей
                </div>
            </div>
            <div className={styles.navbar_container}>
                <div className={styles.name}>SAVANNAH WORLD</div>

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
                </nav>
                
                <Button
                    className={styles.buttonSigin}
                    variant="secondary"
                    onClick={changeSigninModal}
                >
                    войти
                </Button>
            </div>
        </>
    )
}