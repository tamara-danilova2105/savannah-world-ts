import picture_1920 from "@/shared/assets/banner/banner_1920x1080.jpg";
import picture_1920_2x from "@/shared/assets/banner/banner_1920x1080@2x.jpg";
import picture_1920webp from "@/shared/assets/banner/banner_1920x1080.webp";
import picture_1920_2xwebp from "@/shared/assets/banner/banner_1920x1080@2x.webp";
import picture_1440 from "@/shared/assets/banner/banner_1440x810.jpg";
import picture_1440_2x from "@/shared/assets/banner/banner_1440x810@2x.jpg";
import picture_1440webp from "@/shared/assets/banner/banner_1440x810.webp";
import picture_1440_2xwebp from "@/shared/assets/banner/banner_1440x810@2x.webp";
import picture_1024 from "@/shared/assets/banner/banner_1024x576.jpg";
import picture_1024_2x from "@/shared/assets/banner/banner_1024x576@2x.jpg";
import picture_1024webp from "@/shared/assets/banner/banner_1024x576.webp";
import picture_1024_2xwebp from "@/shared/assets/banner/banner_1024x576@2x.webp";
import picture_768 from "@/shared/assets/banner/banner_768x432.jpg";
import picture_768_2x from "@/shared/assets/banner/banner_768x432@2x.jpg";
import picture_768webp from "@/shared/assets/banner/banner_768x432.webp";
import picture_768_2xwebp from "@/shared/assets/banner/banner_768x432@2x.webp";
import picture_320 from "@/shared/assets/banner/banner_320x180.jpg";
import picture_320_2x from "@/shared/assets/banner/banner_320x180@2x.jpg";
import picture_320webp from "@/shared/assets/banner/banner_320x180.webp";
import picture_320_2xwebp from "@/shared/assets/banner/banner_320x180@2x.webp";
import styles from './Hero.module.scss';
import { Text } from "@/shared/ui/Text/Text";
import { getRouteCatalog } from "@/shared/const/router";
import { arrowIcon } from "@/shared/assets/svg/arrowIcons";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/Button/Button";

export const Hero = () => {
    return (
        <header className={styles.hero}>
            <picture>
                <source media="(min-width: 1920px)"
                    srcSet={`${picture_1920webp} 1x, ${picture_1920_2xwebp} 2x`} type="image/webp" />
                <source media="(min-width: 1920px)"
                    srcSet={`${picture_1920} 1x, ${picture_1920_2x} 2x`} />
                <source media="(min-width: 1440px)"
                    srcSet={`${picture_1440webp} 1x, ${picture_1440_2xwebp} 2x`} type="image/webp" />
                <source media="(min-width: 1440px)"
                    srcSet={`${picture_1440} 1x, ${picture_1440_2x} 2x`} />
                <source media="(min-width: 1024px)"
                    srcSet={`${picture_1024webp} 1x, ${picture_1024_2xwebp} 2x`} type="image/webp" />
                <source media="(min-width: 1024px)"
                    srcSet={`${picture_1024} 1x, ${picture_1024_2x} 2x`} />
                <source media="(min-width: 821px)"
                    srcSet={`${picture_768webp} 1x, ${picture_768_2xwebp} 2x`} type="image/webp" />
                <source media="(min-width: 821px)"
                    srcSet={`${picture_768} 1x, ${picture_768_2x} 2x`} />
                <source media="(min-width: 320px)"
                    srcSet={`${picture_320webp} 1x, ${picture_320_2xwebp} 2x`} type="image/webp" />
                <img className={styles.picture} src={picture_320}
                    srcSet={`${picture_320_2x} 2x`} alt="Savannah World" width="310" height="180" />
            </picture>

            <div className={styles.title_container}>
                <Text tag='h1' className={styles.title}>
                    SAVANNAH WORLD<br />
                    <span className={styles.text}>Питомник кошек Саванны </span>
                </Text>
                <Button className={styles.button}>
                    <Link to={getRouteCatalog()}>
                        в каталог {arrowIcon()}
                    </Link>
                </Button>
            </div>
        </header>
    );
};

