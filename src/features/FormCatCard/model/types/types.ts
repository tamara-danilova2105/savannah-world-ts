import { Cat } from "@/entities/Cat";

export type CatCard = Omit<Cat, '_id' | 'images'>;

export interface CreateCatCardSchema {
    cat: CatCard
}