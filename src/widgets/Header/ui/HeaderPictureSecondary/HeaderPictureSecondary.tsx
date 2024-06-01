import picture from "../../../../shared/assets/banner/banner_catalog.png";
import picture2x from "../../../../shared/assets/banner/banner_catalog@2x.png";
import styles from './HeaderPictureSecondary.module.scss'

export const HeaderPictureSecondary = () => {
    return (
        <picture>
            <img className={styles.picture} src={picture}
                srcSet={`${picture2x} 2x`} alt="Savannah World" width="350" height="201" />
        </picture> 
    )
}
