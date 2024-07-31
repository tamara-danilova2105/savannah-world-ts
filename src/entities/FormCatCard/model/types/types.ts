import { Cat } from "@/features/Cats";

export type CatCard = Omit<Cat, '_id' | 'image'>;

export interface CreateCatCardSchema {
    cat: CatCard
}