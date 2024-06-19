export const dataFilter = {
    group: ['Ф2', 'Ф3', 'Ф4'],
    sex: ['самец', 'самка'],
    age: ['взрослые', 'котята'],
    shipment: ['готов к отправке', 'в процессе']
};

interface Filters {
    [key: string]: string;
} 

export const filters: Filters = {
    group: 'группа',
    sex: 'пол',
    age: 'возраст',
    shipment: 'статус',
}
