import { AboutUs } from '@/entities/AboutUs';
import { Faq } from '@/entities/Faq';
import { OurKittens } from '@/entities/OurKittens';
import { Characterictics } from '@/entities/Characteristics';
import { GeneticSubgroups } from '@/entities/GeneticSubgroups';
import { Advices } from '@/entities/Advices';
import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <main className={styles.main}>
            <AboutUs />
            <OurKittens />
            <Characterictics />
            <GeneticSubgroups />
            <Advices />
            <Faq />
        </main>
    );
};

export default MainPage;
