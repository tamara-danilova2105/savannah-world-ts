import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiUrl = 'http://localhost:8000';

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
    endpoints: (builder) => ({}),
});
