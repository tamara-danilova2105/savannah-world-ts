import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createCatCard  from '@/features/FormCatCard/model/slices/slice';
import { api } from '@/shared/api/api';

const rootReducer = combineReducers({
    createCatCard,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
