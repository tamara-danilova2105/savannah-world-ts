import { HeaderSection } from '@/shared/ui/HeaderSection';
import { Desktop } from '../Desktop/Desktop';
import styles from './Gallery.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { SwiperGallery } from '../Swiper/Swiper';

export const Gallery = () => {

    const handleClick = () => {
        console.log('test');

    }
    return (
        <section className={styles.section}>
            <HeaderSection
                section="Галерея"
                hasButton
                handleClick={handleClick}
                button='@savannah_lana_photo'
            >
                <Text tag="h2" size='xl' className={styles.title}>
                    Больше <span>о нас и жизни </span> наших питомцев
                </Text>
            </HeaderSection>

            <Desktop />
            <SwiperGallery />
        </section>
    );
};
