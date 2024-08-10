import { useShownOnScroll } from "@/shared/hooks/useShownOnScroll";
import styles from './ButtonUp.module.scss';
import { upIcon } from "@/shared/assets/svg/upIcon";
import { memo } from "react";

export const ButtonUp = memo(() => {

    const { isShow, handleScrollUp } = useShownOnScroll();

    return (
        <>
            {isShow &&
                <button
                    className={styles.upButton}
                    onClick={handleScrollUp}
                    type='button'
                >
                    {upIcon()}
                </button>
            }
        </>
    );
});
