import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_ROOT } from "../../../../constants/apiUrls";
import { URL_GOOGLE_STORAGEQUOTA } from "./urls";

export const storageQuotaApi = createApi({
    reducerPath: "storageQuotaApi",
    baseQuery: fetchBaseQuery({
        baseUrl: URL_ROOT,
        prepareHeaders: (headers, { getState }) => {
            const token = getState()?.auth?.accessToken;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        storageQuota: builder.query({
            query: () => ({
                url: URL_GOOGLE_STORAGEQUOTA,
                credentials: "include",
            }),
        }),
    }),
});

export const { useStorageQuotaQuery, useLazyStorageQuotaQuery } =
    storageQuotaApi; //TODO: delete useLazyStorageQuotaQuery
