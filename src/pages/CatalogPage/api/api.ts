import { api } from "@/shared/api/api";

const catsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCats: build.query({
            query: () => ({
                url: '/',
            }),
        }),
        saveCat: build.mutation({
            query: (newCats) => ({
                url: '/',
                method: 'POST',
                body: newCats,
            })
        }),
    }),
});

export const {
    useGetCatsQuery,
    useSaveCatMutation,
} = catsApi;