import { Cat } from '@/entities/Cat/model/types/cat';
import cat1 from './cat1.png';
import cat2 from './cat2.png';
import cat3 from './cat3.png';

export interface KittensMock {
    id: number;
    name_cat: string;
    generate: string;
    sex: string;
    age: string;
    shipment: string;
    images: string;
}

export const kittensMock: Cat[] = [
    {
        id: 1,
        images: cat1,
        name_cat: "имя 1",
        generate: "Ф1",
        sex: 'самка',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        id: 2,
        images: cat2,
        name_cat: "имя 2",
        generate: "Ф2",
        sex: 'самец',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        id: 3,
        images: cat3,
        name_cat: "имя 3",
        generate: "Ф6",
        sex: 'самец',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        id: 4,
        images: cat1,
        name_cat: "имя 1",
        generate: "Ф1",
        sex: 'самка',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        id: 5,
        images: cat2,
        name_cat: "имя 2",
        generate: "Ф2",
        sex: 'самец',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        id: 6,
        images: cat3,
        name_cat: "имя 3",
        generate: "Ф6",
        sex: 'самец',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        id: 7,
        images: cat2,
        name_cat: "имя 2",
        generate: "Ф2",
        sex: 'самец',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        id: 8,
        images: cat3,
        name_cat: "имя 3",
        generate: "Ф6",
        sex: 'самец',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        id: 9,
        images: cat1,
        name_cat: "имя 1",
        generate: "Ф1",
        sex: 'самка',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        id: 10,
        images: cat2,
        name_cat: "имя 2",
        generate: "Ф2",
        sex: 'самец',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        id: 11,
        images: cat3,
        name_cat: "имя 3",
        generate: "Ф6",
        sex: 'самец',
        age: "котята",
        shipment: "готов к отправке",
    },
    {
        id: 12,
        images: cat1,
        name_cat: "имя 1",
        generate: "Ф1",
        sex: 'самка',
        age: "котята",
        shipment: "готов к отправке",
    },
]