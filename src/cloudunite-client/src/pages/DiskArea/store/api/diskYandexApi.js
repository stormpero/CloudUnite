import { createApi } from "@reduxjs/toolkit/query/react";
import {
    URL_YANDEX_DISKFILES,
    URL_YANDEX_RECENTFILES,
    URL_YANDEX_TRASHFILES,
} from "../../../../constants/apiUrls/disks/yandexDiskUrls";

import { baseQueryWithReAuth } from "../../../../redux/api/baseQuery";

export const diskYandexApi = createApi({
    reducerPath: "diskYandexApi",
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getFolderFiles: builder.query({
            query: (folderId) => ({
                url: URL_YANDEX_DISKFILES,
                params: { folderId },
            }),
        }),
        getRecentFiles: builder.query({
            query: (folderId) => ({
                url: URL_YANDEX_RECENTFILES,
                params: { folderId },
            }),
        }),
        getTrashFiles: builder.query({
            query: (folderId) => ({
                url: URL_YANDEX_TRASHFILES,
                params: { folderId },
            }),
        }),
    }),
});

export const {
    useGetFolderFilesQuery,
    useLazyGetFolderFilesQuery,
    useGetRecentFilesQuery,
    useGetTrashFilesQuery,
} = diskYandexApi;
