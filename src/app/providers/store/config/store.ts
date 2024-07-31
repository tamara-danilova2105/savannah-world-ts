import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createCatCard } from "@/entities/FormCatCard";
import { api } from "@/shared/api/api";
import { filter } from "@/features/Filter";

const rootReducer = combineReducers({
    createCatCard,
    filter,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
