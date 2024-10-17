import { api } from "./index";

export const fileApi = api.injectEndpoints({
    endpoints: (build) => ({
        uploadFiles: build.mutation({
            query: (body) => ({
                url: "/api/upload/files",
                method: "POST",
                body,
            }),
            invalidatesTags: [],
        }),
        createPost: build.mutation({
            query: (body) => ({
                url: "/api/post",
                method: "POST",
                body,
            }),
            invalidatesTags: [],
        }),
    }),
});

export const { useUploadFilesMutation, useCreatePostMutation } = fileApi;
