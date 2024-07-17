import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateCatCardSchema } from "../types/types";
import { RootState } from "@/app/providers/store/config/store";

const initialState: CreateCatCardSchema = {
    cat: {
        name_cat: '',
        generate: '',
        sex: '',
        age: '',
        shipment: '',
    }
}

export const createCatCardSlice = createSlice({
    name: 'createCatCard',
    initialState,
    reducers: {
        setCatCard: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload; 
            state.cat = {
                ...state.cat, 
                [key]: value
            }
        },
        resetCatCard: () => initialState,
    },
})

export const { setCatCard, resetCatCard } = createCatCardSlice.actions;
export const getCatCard = (state: RootState) => state.createCatCard.cat;
export default createCatCardSlice.reducer;