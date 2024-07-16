import { Cat } from "@/entities/Cat";

export type CatCard = Omit<Cat, '_id'>;

export interface CreateCatCardSchema {
    cat: CatCard
}