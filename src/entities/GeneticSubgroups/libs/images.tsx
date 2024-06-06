import pictureF2 from '@/shared/assets/images/cat_f2.png';
import pictureF2_2x from '@/shared/assets/images/cat_f2@2x.png';
import pictureF3 from '@/shared/assets/images/cat_f3.png';
import pictureF3_2x from '@/shared/assets/images/cat_f3@2x.png';
import pictureF4 from '@/shared/assets/images/cat_f4.png';
import pictureF4_2x from '@/shared/assets/images/cat_f4@2x.png';

export const f2Icon = () => {
    return (
        <img src={pictureF2}
            srcSet={`${pictureF2_2x} 2x`} alt="черный силует кошки" width="251" height="196" 
        />
    )
}

export const f3Icon = () => {
    return (
        <img src={pictureF3}
            srcSet={`${pictureF3_2x} 2x`} alt="черный силует кошки" width="207" height="153" 
        />
    )
}

export const f4Icon = () => {
    return (
        <img src={pictureF4}
            srcSet={`${pictureF4_2x} 2x`} alt="черный силует кошки" width="144" 
        />
    )
}