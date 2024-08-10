import styles from './Navbar.module.scss';
import { Button } from '@/shared/ui/Button/ui/Button';
import { useModal } from '@/shared/hooks/useModal';
import { Signin } from '@/features/Signin';
import { useAppRoutes } from '@/shared/hooks/useAppRoutes';
import { routeConfig } from '@/app/providers/router/config/routerConfig';
import { AppNavLink } from '../AppNavLink/AppNavLink';
import { Stack } from '@/shared/ui/Stack';
import { emailIcons, instagramIcon, phoneIcon, telegrmaIcon, vkIcon } from '@/shared/assets/svg/footerIcons';
import { useAuth } from '@/shared/hooks/useAuth';

export const Navbar = () => {
    const [changeSigninModal, drawSiginModal] = useModal();
    const routes = useAppRoutes(routeConfig);
    const { isAuth, logout } = useAuth();

    const handleClick = () => {
        if (isAuth) logout();
        else changeSigninModal();     
    }

    return (
        <>
            {drawSiginModal(
                <Signin changeSigninModal={changeSigninModal} />
            )}

            <Stack 
                justify='between'
                className={styles.contact_container}
            >
                <Stack gap='32' className={styles.contact}>
                    <Stack gap='8'> 
                        {phoneIcon()} +999 888-77-66
                    </Stack>
                    <Stack gap='8'>
                        {emailIcons()} savannahworld@gmail.com
                    </Stack>
                </Stack>
                <Stack gap='32' className={styles.contact}>
                    {telegrmaIcon()}
                    {vkIcon()}
                    {instagramIcon()}
                </Stack>
            </Stack>
            
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
                    onClick={handleClick}
                >
                    {isAuth ? 'выйти' : 'войти'} 
                </Button>
            </div>
        </>
    )
}