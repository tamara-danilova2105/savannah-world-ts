export interface Cat {
    _id: string;
    name_cat: string;
    generate: string;
    sex: string;
    age: string;
    shipment: string;
    image: string;
}

export type CatCard = Omit<Cat, '_id' | 'image'>;

export interface CreateCatCardSchema {
    cat: CatCard
}