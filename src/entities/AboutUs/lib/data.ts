import { consultationIcon, documentIcon, veterinaryIcon } from "@/shared/assets/svg/benefitIcons";
import { ReactNode } from "react";

export interface IBenefits {
    icon: ReactNode;
    text: string;
}


export const benefits: IBenefits[]  = [
    {
        icon: documentIcon(),
        text: 'Документация согласно стандартам породы',
    },
    {
        icon: veterinaryIcon(),
        text: 'Полное ветеринарное обследование и вакцинация',
    },
    {
        icon: consultationIcon(),
        text: 'Консультация по вопросам содержания и воспитания',
    },
]