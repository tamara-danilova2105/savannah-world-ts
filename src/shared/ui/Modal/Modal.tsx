import { MouseEvent, ReactNode } from 'react';
import styles from './Modal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ModalProps {
    className?: string;
    children: ReactNode;
    setIsOpen: (value: boolean) => void;
}

export const Modal = (props: ModalProps) => {

    const { className, children, setIsOpen} = props;

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.dataset.class === 'overlay') {
            setIsOpen(false);
        }
    };

    return (
        <div className={classNames(styles.modal, {}, [className])}>
            <div
                className={styles.overlay}
                data-class="overlay"
                onClick={handleClick}
            >
                {children}
            </div>
        </div>
    );
};