import { IAccordionItem } from '@/entities/Faq/model/types';
import styles from './AccordionItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

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
                className={isOpen ? styles.open : styles.question}
                onClick={onClick}
            >
                {question}
                {isOpen ? <span>+</span> : <span>-</span>}
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