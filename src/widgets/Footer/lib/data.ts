import { 
    emailIcons, 
    instagramIcon, 
    locationIcon, 
    phoneIcon, 
    telegrmaIcon, 
    vkIcon 
} from "@/shared/assets/svg/footerIcons";
import { ReactNode } from "react";

export interface Contacts {
    id?: number;
    icon?: ReactNode;
    href?: string;
    text?: string;
}

export const contacts: Contacts[] = [
    {
        id: 1,
        icon: phoneIcon(),
        href: 'tel:+9998887766',
        text: '+999 888-77-66'
    },
    {
        id: 2,
        icon: emailIcons(),
        href: 'mailto:savannahworld@gmail.com',
        text: 'savannahworld@gmail.com'
    },
    {
        id: 3,
        icon: locationIcon(),
        text: 'г.Москва, ул.Отрадная, дом 1'
    },
    {
        id: 4,
        icon: telegrmaIcon(),
        href: 'https://t.me/savannahworld',
        text: '@savannahworld'
    },

    {
        id: 5,
        icon: instagramIcon(),
        href: 'https://instagram.com/@savannah_lana_photo',
        text: '@savannah_lana_photo'
    },
    {
        id: 6,
        icon: vkIcon(),
        href: 'https://vk.com/savannahworld',
        text: '@savannahworld'
    },
];