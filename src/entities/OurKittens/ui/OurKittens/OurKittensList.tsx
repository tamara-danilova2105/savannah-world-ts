import { useCallback } from 'react';
import styles from './OurKittensList.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { kittensMock } from '@/entities/Cat/ui/CatCard/lib/data';
import { CatCard } from '@/entities/Cat';
import { HeaderSection } from '@/entities/HeaderSection';

export const OurKittensList = () => {

    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate("/catalog");
    }, [navigate]);

    return (
        <section className={styles.section}>
            
            <HeaderSection section="Наши котята" hasButton>
                <Text tag="h2" size='xl' className={styles.title}>
                    Выберите себе <span>питомца</span> в нашем каталоге
                </Text>
            </HeaderSection>

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
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {kittensMock.map(kitten =>
                    <SwiperSlide key={kitten.id}>
                        <CatCard
                            kitten={kitten}
                            onClick={handleClick}
                        />
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    );
};
