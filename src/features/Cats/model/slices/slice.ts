import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/providers/store/config/store";
import { Cat, CreateCatCardSchema } from "../types/cat";

const initialState: CreateCatCardSchema = {
    cat: {
        name_cat: '',
        generate: '',
        sex: '',
        age: '',
        shipment: '',
    }
}

export const catCardSlice = createSlice({
    name: 'catCard',
    initialState,
    reducers: {
        initCatCard: (state, action: PayloadAction<Cat>) => {
            state.cat = action.payload;
        },
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

export const { initCatCard, setCatCard, resetCatCard } = catCardSlice.actions;
export const getCatCard = (state: RootState) => state.catCard.cat;
export default catCardSlice.reducer;