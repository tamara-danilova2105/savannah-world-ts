import { useShownOnScroll } from "@/shared/hooks/useShownOnScroll";
import { useState } from "react";
import styles from './ButtonSocial.module.scss';
import chatIcon from '@/shared/assets/images/chat-icon.png';
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const ButtonSocial = () => {

    const { isShow } = useShownOnScroll();
    const [openMedia, closeMedia] = useState(false);

    const handleSocial = () => closeMedia(!openMedia);

    return (
        <div>
            {isShow &&
                <div>
                    {
                        !openMedia &&
                        <button
                            className={styles.buttonSocial}
                            type="button"
                            onClick={handleSocial}
                        >
                            <img className={styles.iconChat} src={chatIcon} alt="социальные сети" />
                            <span className='visually-hidden'>Социальные сети</span>
                        </button>
                    }
                    {
                        openMedia &&
                        <SocialMedia onClick={handleSocial} />
                    }
                </div>
            }
        </div>
    )
}