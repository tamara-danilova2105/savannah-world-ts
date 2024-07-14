import { Stack } from '@/shared/ui/Stack/Stack';
import styles from './Desktop.module.scss';
import { gallery } from '../../lib/data';

export const Desktop = () => {
    return (
        <Stack justify='between' gap='32' className={styles.gallery}>
            {gallery.map((img, index) =>
                <img
                    key={index}
                    src={img}
                    alt="savannah cat"
                    className={styles.images}
                />
            )}
        </Stack>
    );
};
