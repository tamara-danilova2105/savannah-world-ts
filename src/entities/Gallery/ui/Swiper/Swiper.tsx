import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Swiper.module.scss';
import { Pagination } from 'swiper/modules';
import { gallery } from '../../lib/data';

export const SwiperGallery = () => {
    return (
        <div className={styles.gallery}>
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
                {gallery.map((img, index) =>
                    <SwiperSlide key={index}>
                        <img
                            key={index}
                            src={img}
                            alt="savannah cat"
                            className={styles.images}
                        />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>

    );
};
