import { createApi } from "@reduxjs/toolkit/query/react";
import { URL_GOOGLE_FOLDERFILES } from "../../../../constants/apiUrls/disks/googleDiskUrls";

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
