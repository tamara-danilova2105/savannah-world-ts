import { FC, useCallback, useState } from 'react';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { IAccordionItem } from '@/entities/Faq/model/types';
import styles from './Accordion.module.scss';

interface AccordionProps {
    data: IAccordionItem[];
};

export const Accordion: FC<AccordionProps> = ({ data }) => {

    const [collapse, setCollapse] = useState<number | boolean>(false);

    const accordionHendler = useCallback((id: number) => {
        setCollapse(prevCollapse => id === prevCollapse ? false : id);
    }, []);

    return (
        <ul className={styles.accordion}>
            {data.map(element =>
                <AccordionItem
                    key={element.id}
                    onClick={() => accordionHendler(element.id)}
                    element={element}
                    isOpen={element.id === collapse}
                />
            )}
        </ul>
    );
};
