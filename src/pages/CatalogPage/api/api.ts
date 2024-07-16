import { api } from "@/shared/api/api";

const catsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCats: build.query({
            query: (params) => {
                const query = new URLSearchParams(params).toString();
                return `?${query}`;
            },
        }),
        saveCat: build.mutation({
            query: (newCats) => ({
                url: '/',
                method: 'POST',
                body: newCats,
            })
        }),
        updateCat: build.mutation({
            query: ({ id, ...updatedCat }) => ({
                url: `/${id}`,
                method: 'PUT',
                body: updatedCat,
            })
        }),
        deleteCat: build.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            })
        }),
        uploadFile: build.mutation({
            query: (fileData) => {
                let formData = new FormData();
                formData.append('image', fileData);
                return {
                    url: '/upload',
                    method: 'POST',
                    body: formData,
                };
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