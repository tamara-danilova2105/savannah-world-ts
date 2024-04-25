import { Button } from '@/shared/ui/Button/Button';
import styles from './MainPage.module.scss';

export const MainPage = () => {
    return (
        <div className={styles.main}>
            <Button>
                В КАТАЛОГ
            </Button>
        </div>
    );
};
