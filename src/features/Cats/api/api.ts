import { api } from "@/shared/api/api";
import { createApiConfig } from "@/shared/api/helper";

interface CatTag {
    type: 'Cats';
    id: string; 
};
const CATS_TAG: CatTag[] = [{ type: 'Cats', id: 'LIST' }];

const catsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCats: build.query({
            query: (params) => createApiConfig('GET', `/cats?${new URLSearchParams(params).toString()}`),
            providesTags: () => CATS_TAG,
        }),
        saveCat: build.mutation({
            query: (newCats) => createApiConfig('POST', '/cats', newCats),
            invalidatesTags: CATS_TAG,
        }),
        updateCat: build.mutation({
            query: ({ id, ...updatedCat }) => createApiConfig('PUT', `/cats/${id}`, updatedCat),
            invalidatesTags: CATS_TAG,
        }),
        deleteCat: build.mutation({
            query: (id) => createApiConfig('DELETE', `/cats/${id}`),
            invalidatesTags: CATS_TAG,
        }),
        uploadFile: build.mutation({
            query: (fileData) => {
                let formData = new FormData();
                formData.append('image', fileData);
                return createApiConfig('POST', '/upload', formData);
            }
        }),
    }),
});

export const {
    useGetCatsQuery,
    useSaveCatMutation,
    useUpdateCatMutation,
    useDeleteCatMutation,
    useUploadFileMutation,
} = catsApi;