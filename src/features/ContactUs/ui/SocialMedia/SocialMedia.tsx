import { Stack } from "@/shared/ui/Stack/Stack";
import { Link } from "react-router-dom";
import styles from './SocialMedia.module.scss';
import whatsappIcon from '@/shared/assets/images/whatsapp.png';
import telegramIcon from '@/shared/assets/images/telegram.png';
import closeIcon from '@/shared/assets/images/close.png';

interface SocialMediaProps {
    onClick: () => void;
}

export const SocialMedia = ({ onClick }: SocialMediaProps) => {
    return (
        <Stack
            direction='column'
            justify='center'
            className={styles.media}
        >
            <Link to=''>
                <img src={whatsappIcon} alt='ватсап' />
            </Link>
            <Link to=''>
                <img src={telegramIcon} alt='телеграм' />
            </Link>
            <button
                className={styles.button}
                onClick={onClick}
            >
                <img src={closeIcon} alt='закрыть' />
                <span className='visually-hidden'>закрыть</span>
            </button>
        </Stack>
    )
}