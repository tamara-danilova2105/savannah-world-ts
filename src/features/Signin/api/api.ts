import { api } from "@/shared/api/api";
import { createApiConfig } from "@/shared/api/helper";

const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        loginAdmin: build.mutation({
            query: (admin) => createApiConfig('POST', '/login', admin),
        }),
    }),
});

export const { useLoginAdminMutation } = authApi;