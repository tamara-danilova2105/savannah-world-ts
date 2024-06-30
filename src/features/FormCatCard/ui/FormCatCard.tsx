import { memo } from 'react';
import styles from './FormCatCard.module.scss';

interface FormCatCardProps {};

export const FormCatCard = memo((props: FormCatCardProps) => {
    const {} = props;

    return (
        <div className={styles.formcatcard}>
        </div>
    )
})