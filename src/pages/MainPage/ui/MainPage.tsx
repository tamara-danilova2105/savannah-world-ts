import { AboutUs } from '@/entities/AboutUs';
import styles from './MainPage.module.scss';
import { Faq } from '@/entities/Faq';

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <AboutUs />
            <Faq />
        </main>
    );
};
