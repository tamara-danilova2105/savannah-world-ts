import { useCallback } from 'react';
import styles from './OurKittensList.module.scss';
import { CatCard } from '@/entities/CatCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { kittensMock } from '@/entities/CatCard/lib/data';
import { Text } from '@/shared/ui/Text/Text';

export const OurKittensList = () => {

    const handleClick = useCallback(() => {
        console.log('в каталог');       
    }, []);

    return (
        <section className={styles.section}>
            <Text tag="h2" size="xl" className={styles.title}>
                НАШИ КОТЯТА
            </Text>

            <Swiper
                className={styles.container}
                modules={[Pagination]}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {kittensMock.map(kitten =>
                    <SwiperSlide key={kitten.id}>
                        <CatCard
                            kitten={kitten}
                            isMain
                            onClick={handleClick}
                        />
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    );
};
