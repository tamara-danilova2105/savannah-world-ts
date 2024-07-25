import { useShownOnScroll } from "@/shared/hooks/useShownOnScroll";
import { memo, useCallback, useState } from "react";
import styles from './ButtonSocial.module.scss';
import chatIcon from '@/shared/assets/images/chat-icon.png';
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const ButtonSocial = memo(() => {

    const { isShow } = useShownOnScroll();
    const [isOpen, setIsOpen] = useState(false);

    const handleSocial = useCallback(() => setIsOpen(prev => !prev), []);

    return (
        <div>
            {isShow &&
                <div>
                    {
                        !isOpen &&
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
                        isOpen &&
                        <SocialMedia onClick={handleSocial} />
                    }
                </div>
            }
        </div>
    );
});
