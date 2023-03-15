import { createApi } from "@reduxjs/toolkit/query/react";
import {
    URL_GOOGLE_STORAGEQUOTA,
    URL_YANDEX_STORAGEQUOTA,
} from "../../../../constants/apiUrls";
import { baseQueryWithReAuth } from "../../../../redux/api/baseQuery";

export const storageQuotaApi = createApi({
    reducerPath: "storageQuotaApi",
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        storageQuota: builder.query({
            query: (disk) => ({
                url: URL_STORAGEQUOTA[disk],
            }),
            transformResponse: (response) => {
                return response?.storageQuota;
            },
        }),
    }),
});

export const { useStorageQuotaQuery, useLazyStorageQuotaQuery } =
    storageQuotaApi; //TODO: delete useLazyStorageQuotaQuery

export const URL_STORAGEQUOTA = [
    URL_GOOGLE_STORAGEQUOTA,
    URL_YANDEX_STORAGEQUOTA,
    null, // TODO: Onedrive
];
