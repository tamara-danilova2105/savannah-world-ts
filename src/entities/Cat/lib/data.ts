import { Cat } from '@/entities/Cat/model/types/cat';
import cat1 from './cat1.png';
import cat2 from './cat2.png';
import cat3 from './cat3.png';

export interface KittensMock {
    _id: string;
    name_cat: string;
    generate: string;
    sex: string;
    age: string;
    shipment: string;
    image: string;
}

export const kittensMock: Cat[] = [
    {
        _id: '1',
        image: cat1,
        name_cat: "имя 1",
        generate: "Ф1",
        sex: 'самка',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        _id: '2',
        image: cat2,
        name_cat: "имя 2",
        generate: "Ф2",
        sex: 'самец',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        _id: '3',
        image: cat3,
        name_cat: "имя 3",
        generate: "Ф6",
        sex: 'самец',
        age: "котята",
        shipment: "готов к отправке",
    }
]