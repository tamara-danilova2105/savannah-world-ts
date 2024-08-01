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
            query: (params) => `?${new URLSearchParams(params).toString()}`,
            providesTags: () => CATS_TAG,
        }),
        saveCat: build.mutation({
            query: (newCats) => createApiConfig('POST', '/', newCats),
            invalidatesTags: CATS_TAG,
        }),
        updateCat: build.mutation({
            query: ({ id, ...updatedCat }) => createApiConfig('PUT', `/${id}`, updatedCat),
            invalidatesTags: CATS_TAG,
        }),
        deleteCat: build.mutation({
            query: (id) => createApiConfig('DELETE', `/${id}`),
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