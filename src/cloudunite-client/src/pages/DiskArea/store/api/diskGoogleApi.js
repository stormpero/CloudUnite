import { createApi } from "@reduxjs/toolkit/query/react";
import {
    URL_GOOGLE_FOLDERFILES,
    URL_GOOGLE_RECENTFILES,
    URL_GOOGLE_TRASHFILES,
} from "../../../../constants/apiUrls/disks/googleDiskUrls";

import { baseQueryWithReAuth } from "../../../../redux/api/baseQuery";

export const diskGoogleApi = createApi({
    reducerPath: "diskGoogleApi",
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getFolderFiles: builder.query({
            query: (folderId) => ({
                url: URL_GOOGLE_FOLDERFILES,
                params: { folderId },
            }),
        }),
        getRecentFiles: builder.query({
            query: () => ({
                url: URL_GOOGLE_RECENTFILES,
            }),
        }),
        getTrashFiles: builder.query({
            query: () => ({
                url: URL_GOOGLE_TRASHFILES,
            }),
        }),
    }),
});

export const {
    useGetFolderFilesQuery,
    useLazyGetFolderFilesQuery,
    useGetTrashFilesQuery,
    useGetRecentFilesQuery,
} = diskGoogleApi;
