type Age = 'взрослые' | 'котята';
type Sex = 'самец' | 'самка';
type Color = 'Ф2' | 'Ф3' | 'Ф4';
type Shipment = 'готов к отправке' | 'в процессе';
type OptionValue = Age | Sex | Color | Shipment;

enum Filter {
    AGE = 'age',
    SEX = 'sex',
    COLOR = 'color',
    SHIPMENT = 'shipment',
};

interface Value {
    id: number;
    value: OptionValue;
}

export const dataFilter: Record<Filter, Value[]> = {
    [Filter.AGE]: [
        { id: 1, value: 'взрослые' },
        { id: 2, value: 'котята' }
    ],
    [Filter.SEX]: [
        { id: 1, value: 'самец' },
        { id: 2, value: 'самка' }
    ],
    [Filter.COLOR]: [
        { id: 1, value: 'Ф2' },
        { id: 2, value: 'Ф3' },
        { id: 3, value: 'Ф4' }
    ],
    [Filter.SHIPMENT]: [
        { id: 1, value: 'готов к отправке' },
        { id: 2, value: 'в процессе' }
    ]
};
