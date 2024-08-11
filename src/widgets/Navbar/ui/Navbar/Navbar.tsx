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
import { contacts } from '@/widgets/Footer/lib/data';

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
                    <button className={styles.button_media}>
                        <a href={contacts[3].href} target='_blank' rel="noreferrer">
                            {telegrmaIcon()}
                        </a>
                        <span className='visually-hidden'>открыть телеграм</span>
                    </button>

                    <button className={styles.button_media}>
                        <a href={contacts[5].href} target='_blank' rel="noreferrer">
                            {vkIcon()}
                        </a>
                        <span className='visually-hidden'>открыть вконтакте</span>
                    </button>

                    <button className={styles.button_media}>
                        <a href={contacts[4].href} target='_blank' rel="noreferrer">
                            {instagramIcon()}
                        </a>
                        <span className='visually-hidden'>открыть вконтакте</span>
                    </button>
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