import { memo } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {};

export const Footer = memo((props: FooterProps) => {
    const {} = props;

    return (
        <div className={styles.footer}>
        </div>
    );
});
