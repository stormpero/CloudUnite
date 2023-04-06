import { createApi } from "@reduxjs/toolkit/query/react";
import {
    URL_YANDEX_DISKFILES,
    URL_YANDEX_NEWFOLDER,
    URL_YANDEX_RECENTFILES,
    URL_YANDEX_TRASHFILES,
} from "../../../../constants/apiUrls/disks/yandexDiskUrls";

import { baseQueryWithReAuth } from "../../../../redux/api/baseQuery";

export const diskYandexApi = createApi({
    reducerPath: "diskYandexApi",
    tagTypes: ["Files"],
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        getFolderFiles: builder.query({
            query: (folderId) => ({
                url: URL_YANDEX_DISKFILES,
                params: { folderId },
            }),
            providesTags: ({ items }) => {
                return items
                    ? [
                          ...items.map(({ resource_id }) => ({
                              type: "Files",
                              resource_id,
                          })),
                          { type: "Files", id: "LIST" },
                      ]
                    : [{ type: "Files", id: "LIST" }];
            },
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
        addNewFolder: builder.mutation({
            query: (body) => ({
                url: URL_YANDEX_NEWFOLDER,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Files", id: "LIST" }],
        }),
    }),
});

export const {
    useGetFolderFilesQuery,
    useLazyGetFolderFilesQuery,
    useGetRecentFilesQuery,
    useGetTrashFilesQuery,
    useAddNewFolderMutation,
} = diskYandexApi;
