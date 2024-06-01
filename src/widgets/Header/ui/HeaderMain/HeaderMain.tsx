import { NavbarDesktop } from "@/features/Navbar";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HeaderPictureMain } from "../HeaderPictureMain/HeaderPictureMain";
import { useMobileOrientation } from "react-device-detect";
import styles from './HeaderMain.module.scss';
import { Text } from "@/shared/ui/Text/Text";
import { Link } from "react-router-dom";
import { arrowIcon } from "@/shared/assets/svg/arrowIcon";
import { getRouteCatalog } from "@/shared/const/router";
import { Button } from "@/shared/ui/Button/Button";

export const HeaderMain = () => {
    const { isLandscape } = useMobileOrientation();

    return (
        <header className={classNames(styles.header, {}, [styles.headerMain])}>
            <HeaderPictureMain />
            <div className={styles.headerContext}>
                {isLandscape && <NavbarDesktop />}
                <div className={styles.titleContainer}>
                    <Text tag='h1' className={styles.title}>
                        <span className={styles.text}>Питомник </span> SAVANNAH WORLD
                    </Text>
                    <Link to={getRouteCatalog()} >
                        <Button className={styles.btn}>
                            в каталог {arrowIcon()}
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};