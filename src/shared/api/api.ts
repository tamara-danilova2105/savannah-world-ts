import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const config = {
    production: 'https://savannah-world-backend.onrender.com',
    develop: 'http://localhost:8000',
}

export const apiUrl = config.develop;

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
        prepareHeaders: (headers) => {
            const token = Cookies.get('authToken');;
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        }
    }),
    tagTypes: ['Cats'],
    endpoints: (builder) => ({}),
});
