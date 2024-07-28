import { memo } from 'react';
import styles from './Badge.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface BadgeProps {
    className?: string;
    count: number
}

export const Badge = memo((props: BadgeProps) => {
    const {className, count} = props;
    
    return (
        <div className={classNames(styles.badge, {}, [className])}>
            {count}
        </div>
    );
});
