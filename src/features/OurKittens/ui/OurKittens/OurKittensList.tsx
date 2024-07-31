import { useCallback } from 'react';
import styles from './OurKittensList.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Cat, CatCard, CatList } from '@/features/Cats';
import { HeaderSection } from '@/shared/ui/HeaderSection';
import { Stack } from '@/shared/ui/Stack/Stack';
import { useGetCatsQuery } from '@/pages/CatalogPage/api/api';

export const OurKittensList = () => {

    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate("/catalog");
    }, [navigate]);

    const {
        data: { cats } = {},
        error,
        isLoading
    } = useGetCatsQuery({shipment: ['готов к отправке']});

    if (error) return null;

    return (
        <section className={styles.section}>
            <HeaderSection
                section="Наши котята"
                hasButton
                handleClick={handleClick}
                button='купить котенка'
            >
                <Text tag="h2" size='xl' className={styles.title}>
                    Выберите себе <span>питомца</span>
                </Text>
                
            </HeaderSection>

            <Stack
                justify='between'
                className={styles.container_desktop}
            >
                <CatList 
                    cats={cats?.slice(0, 3)} 
                    isLoading={isLoading} 
                    skeletons={3}
                />
            </Stack>

            <div className={styles.container_mobile}>
                <Swiper
                    modules={[Pagination]}
                    loop={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 120,
                        },
                    }}
                >
                    {cats?.slice(0, 3).map((cat: Cat) =>
                        <SwiperSlide key={cat._id}>
                            <CatCard
                                cat={cat}
                                onClick={handleClick}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section>
    );
};