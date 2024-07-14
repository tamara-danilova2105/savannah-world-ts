import { api } from "@/shared/api/api";
import { getQueryParams } from "@/shared/lib/getQueryParams/getQueryParams";

const catsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCats: build.query({
            query: (filterParams) => {
                const params: Record<string, string> = {
                    group: filterParams.group?.join(','),
                    sex: filterParams.sex?.join(','),
                    age: filterParams.age?.join(','),
                    shipment: filterParams.shipment?.join(',')
                };

                const queryParams = getQueryParams(params);

                return {
                    url: `/${queryParams}`,
                };
            },
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