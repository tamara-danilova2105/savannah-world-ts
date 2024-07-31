import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "@/shared/api/api";
import { filter } from "@/features/Filter";
import { catCard } from "@/features/Cats";

const rootReducer = combineReducers({
    catCard,
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
