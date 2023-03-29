import { createApi } from "@reduxjs/toolkit/query/react";
import { URL_GOOGLE_FOLDERFILES } from "../../../../constants/apiUrls/disks/googleDiskUrls";
import { URL_YANDEX_DISKFILES } from "../../../../constants/apiUrls/disks/yandexDiskUrls";

import { baseQueryWithReAuth } from "../../../../redux/api/baseQuery";

export const diskSpaceApi = createApi({
    reducerPath: "diskSpaceApi",
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getFolderFiles: builder.query({
            query: (folderId) => ({
                url: URL_YANDEX_DISKFILES,
                params: { folderId },
            }),
        }),
        getFolderFilesGoogle: builder.query({
            query: (folderId) => ({
                url: URL_GOOGLE_FOLDERFILES,
                params: { folderId },
            }),
        }),
    }),
});

export const { useLazyGetFolderFilesQuery, useGetFolderFilesGoogleQuery } = diskSpaceApi;
