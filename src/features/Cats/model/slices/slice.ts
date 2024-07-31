import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/providers/store/config/store";
import { CreateCatCardSchema } from "../types/cat";

const initialState: CreateCatCardSchema = {
    cat: {
        name_cat: '',
        generate: '',
        sex: '',
        age: '',
        shipment: '',
    }
}

export const сatCardSlice = createSlice({
    name: 'сatCard',
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

export const { setCatCard, resetCatCard } = сatCardSlice.actions;
export const getCatCard = (state: RootState) => state.catCard.cat;
export default сatCardSlice.reducer;