import { AboutUs } from '@/entities/AboutUs';
import { Faq } from '@/entities/Faq';
import { OurKittens } from '@/entities/OurKittens';
import { Characterictics } from '@/entities/Characteristics';
import { GeneticSubgroups } from '@/entities/GeneticSubgroups';
import { Advices } from '@/entities/Advices';
import styles from './MainPage.module.scss';
import { Hero } from '@/entities/Hero/ui/Hero';

const MainPage = () => {
    return (
        <main>
            <Hero />
            <div className={styles.main}>
                <AboutUs />
                <OurKittens />
                <Characterictics />
                <GeneticSubgroups />
                <Advices />
                <Faq />
            </div>
        </main>
    );
};

export default MainPage;
