import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/ui/Button';
import styles from './AccordionItem.module.scss';
import { plusIcon } from '@/shared/assets/svg/plusIcon';
import { minusIcon } from '@/shared/assets/svg/minusIcon';
import { IAccordionItem } from '@/entities/Faq/libs/data';
import { memo } from 'react';

interface AccordionItemProps {
    className?: string;
    element: IAccordionItem;
    isOpen: boolean;
    onClick: () => void;
};

export const AccordionItem = memo((props: AccordionItemProps) => {
    const {
        className,
        element,
        isOpen,
        onClick,
    } = props;

    const { question, answer } = element;

    return (
        <li className={classNames(styles.accordionitem, {}, [className])}>
            <Button
                className={`${styles.btn} ${isOpen ? styles.open : styles.close}`}
                onClick={onClick}
            >
                <span className={styles.question}>{question}</span>
                <span className={`${styles.icon} ${isOpen && styles.rotate}`}>
                    {isOpen ? minusIcon() : plusIcon()}
                </span>
            </Button>
            {
                isOpen &&
                <div className={styles.answer}>
                    {answer}
                </div>
            }
        </li>
    );
});
