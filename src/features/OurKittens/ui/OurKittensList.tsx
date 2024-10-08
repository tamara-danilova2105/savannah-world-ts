import { useCallback, useMemo } from 'react';
import styles from './OurKittensList.module.scss';
import { Text } from '@/shared/ui/Text/ui/Text';
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Cat, CatCard, CatList } from '@/features/Cats';
import { HeaderSection } from '@/shared/ui/HeaderSection';
import { Stack } from '@/shared/ui/Stack';
import { useGetCatsQuery } from '@/features/Cats/api/api';
import { breakpoints } from '../lib';
import { getRouteCatalog } from '@/shared/const/router';
import { Skeleton } from '@/shared/ui/Skeleton';

export const OurKittensList = () => {

    const navigate = useNavigate();

    const {
        data: { cats } = {},
        error,
        isLoading
    } = useGetCatsQuery({ shipment: ['готов к отправке'] });

    const handleNavigateToCatalog = useCallback(() => {
        navigate(getRouteCatalog());
    }, [navigate]);

    const catsForDesktop = useMemo(() => cats?.slice(0, 4), [cats]);
    const catsForMobile = useMemo(() => cats?.slice(0, 6), [cats]);

    const renderSlides = useCallback(() => {
        if (isLoading) {
            return <Skeleton />;
        }
    
        return catsForMobile?.map((cat: Cat) => (
            <SwiperSlide key={cat._id}>
                <CatCard
                    cat={cat}
                    onClick={handleNavigateToCatalog}
                />
            </SwiperSlide>
        ));
    }, [isLoading, catsForMobile, handleNavigateToCatalog]);

    if (error) return null;

    return (
        <section className={styles.section}>
            <HeaderSection
                section="Наши котята"
                hasButton
                handleClick={handleNavigateToCatalog}
                button='купить котенка'
            >
                <Text tag="h2" size='xl' className={styles.title}>
                    Выберите себе <span>питомца</span>
                </Text>
            </HeaderSection>

            <Stack
                justify='between'
                className={styles.container_desktop}
                gap='32'
            >
                <CatList
                    cats={catsForDesktop}
                    isLoading={isLoading}
                    skeletons={3}
                />
            </Stack>

            <div className={styles.container_mobile}>
                <Swiper
                    modules={[Pagination]}
                    loop={true}
                    pagination={{ clickable: true }}
                    breakpoints={breakpoints}
                >
                    {renderSlides()}
                </Swiper>
            </div>
        </section>
    );
};
