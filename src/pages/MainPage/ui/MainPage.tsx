import { AboutUs } from '@/entities/AboutUs';
import styles from './MainPage.module.scss';

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <AboutUs />
        </main>
    );
};
