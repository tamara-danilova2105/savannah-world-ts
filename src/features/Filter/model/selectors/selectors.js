import { createSelector } from "@reduxjs/toolkit";

const selectFilters = state => state.filter;

export const selectFilterParams = createSelector(
    [selectFilters],
    (filters) => ({
        generate: filters.generate,
        sex: filters.sex,
        age: filters.age,
        shipment: filters.shipment,
    })
);