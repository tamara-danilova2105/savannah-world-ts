import { ReactNode } from "react";
import { f2Icon, f3Icon, f4Icon } from "./images";

export interface GeneticSubgroup {
    title: string;
    text: string;
    img: ReactNode;
}


export const geneticSubgroupsData: GeneticSubgroup[] = [
    {
        title: 'f2',
        text: 'Второе гибридное поколение, в данном случае полученное от скрещивания саванны первого поколения с домашней кошкой. Гены сервала не превышают 30%.',
        img: f2Icon(),
    },
    {
        title: 'f3',
        text: 'Третье гибридное поколение, полученное в результате скрещивания саванны второго поколения с домашней кошкой. Гены сервала не превышают 13%.',
        img: f3Icon(),
    },
    {
        title: 'f4-f5',
        text: 'Четвертое и пятое гибридные поколения получены в результате скрещивания третьего поколения с домашней кошкой.  Котята имеют свойственный породе леопардовый окрас.',
        img: f4Icon(),
    },
];
