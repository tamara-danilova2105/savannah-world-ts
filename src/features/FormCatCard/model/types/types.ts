import { Cat } from "@/entities/Cat";

export type CatCard = Omit<Cat, '_id' | 'image'>;

export interface CreateCatCardSchema {
    cat: CatCard
}