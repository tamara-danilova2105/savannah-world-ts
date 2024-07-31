import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const config = {
    production: 'https://savannah-world-backend.onrender.com',
    develop: 'http://localhost:8000',
}

export const apiUrl = config.production;

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
        prepareHeaders: (headers) => {
            const token = 'FIX_LATER';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        }
    }),
    tagTypes: ['Cats'],
    endpoints: (builder) => ({}),
});
