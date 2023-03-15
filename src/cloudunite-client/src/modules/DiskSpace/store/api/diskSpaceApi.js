import { createApi } from "@reduxjs/toolkit/query/react";
import {
    URL_GOOGLE_FOLDERFILES,
    URL_GOOGLE_FOLDERTREE,
} from "../../../../constants/apiUrls";
import { baseQueryWithReAuth } from "../../../../redux/api/baseQuery";

export const diskSpaceApi = createApi({
    reducerPath: "diskSpaceApi",
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getFolderFiles: builder.query({
            query: (folderId) => ({
                url: URL_GOOGLE_FOLDERFILES,
                params: { folderId },
            }),
        }),
    }),
});

export const { useGetFolderFilesQuery } = diskSpaceApi;
