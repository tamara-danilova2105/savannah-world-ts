import { FC, useCallback, useState } from 'react';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { IAccordionItem } from '@/entities/Faq/model/types';

interface AccordionProps {
    data: IAccordionItem[];
}

export const Accordion: FC<AccordionProps> = ({ data }) => {

    const [collapse, setCollapse] = useState<number | boolean>(false);

    const accordionHendler = useCallback((id: number) => {
        setCollapse(prevCollapse => id === prevCollapse ? false : id);
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
    )
}