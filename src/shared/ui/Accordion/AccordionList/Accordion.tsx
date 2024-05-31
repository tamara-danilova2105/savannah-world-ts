import { FC, useCallback, useState } from 'react';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { IAccordionItem } from '@/entities/Faq/libs/data';

interface AccordionProps {
    data: IAccordionItem[];
};

export const Accordion: FC<AccordionProps> = ({ data }) => {

    const [collapse, setCollapse] = useState<number | null>(1);

    const accordionHendler = useCallback((id: number) => {
        setCollapse(prevCollapse => id === prevCollapse ? null : id);
    }, []);

    return (
        <ul>
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
