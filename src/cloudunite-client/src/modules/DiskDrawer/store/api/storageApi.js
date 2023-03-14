import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuth } from "../../../../redux/api/baseQuery";
import { URL_GOOGLE_STORAGEQUOTA } from "./urls";

export const storageQuotaApi = createApi({
    reducerPath: "storageQuotaApi",
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        storageQuota: builder.query({
            query: () => ({
                url: URL_GOOGLE_STORAGEQUOTA,
            }),
        }),
    }),
});

export const { useStorageQuotaQuery, useLazyStorageQuotaQuery } =
    storageQuotaApi; //TODO: delete useLazyStorageQuotaQuery
