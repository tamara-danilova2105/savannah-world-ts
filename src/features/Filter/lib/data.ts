import { dataFilters, Filters } from "../model/types/types";

export const dataFilter: dataFilters = {
    generate: ['Ф2', 'Ф3', 'Ф4'],
    sex: ['самец', 'самка'],
    age: ['взрослые', 'котята'],
    shipment: ['готов к отправке', 'ожидание', 'продан']
};

export const filters: Filters = {
    generate: 'группа',
    sex: 'пол',
    age: 'возраст',
    shipment: 'статус',
}

export const getFilterText = (filter: string) => filters[filter];