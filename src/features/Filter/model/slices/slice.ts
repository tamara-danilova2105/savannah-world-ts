import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/providers/store/config/store";
import { dataFilters } from "../types/types";

const initialState: dataFilters = {
    group: [],
    sex: [],
    age: [],
    shipment: [],
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        resetFilter: () => initialState,
    },
})

export const { resetFilter } = filterSlice.actions;
export const getFilter = (state: RootState) => state.createCatCard.cat;
export default filterSlice.reducer;