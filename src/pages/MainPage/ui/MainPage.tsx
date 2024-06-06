import { AboutUs } from '@/entities/AboutUs';
import { Faq } from '@/entities/Faq';
import { OurKittens } from '@/entities/OurKittens';
import { Characterictics } from '@/entities/Characteristics';
import styles from './MainPage.module.scss';
import { GeneticSubgroups } from '@/entities/GeneticSubgroups';

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <AboutUs />
            <OurKittens />
            <Characterictics />
            <GeneticSubgroups />
            <Faq />
        </main>
    );
};
