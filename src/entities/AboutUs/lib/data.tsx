import { ReactNode } from "react";

export interface IBenefits {
    icon: ReactNode;
    text: string;
}


export const benefits: IBenefits[]  = [
    {
        icon: <></>,
        text: 'Документация согласно стандартам породы',
    },
    {
        icon: <></>,
        text: 'Полное ветеринарное обследование и вакцинация',
    },
    {
        icon: <></>,
        text: 'Консультация по вопросам содержания и воспитания',
    },
]