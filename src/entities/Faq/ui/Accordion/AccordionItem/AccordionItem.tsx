import { IAccordionItem } from '@/entities/Faq/model/types';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import styles from './AccordionItem.module.scss';
import { plusIcon } from '@/shared/assets/svg/plusIcon';
import { minusIcon } from '@/shared/assets/svg/minusIcon';

interface AccordionItemProps {
    className?: string;
    element: IAccordionItem;
    isOpen: boolean;
    onClick: () => void;
}

export const AccordionItem = (props: AccordionItemProps) => {
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
                {isOpen 
                    ? <span>{plusIcon()}</span> 
                    : <span>{minusIcon()}</span>
                }
            </Button>
            {
                isOpen &&
                <div className={styles.answer}>
                    {answer}
                </div>
            }
        </li>
    )
}