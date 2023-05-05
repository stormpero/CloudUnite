import { createApi } from "@reduxjs/toolkit/query/react";
import {
    URL_FRIENDS_USERSLIST,
    URL_STORAGEQUOTA,
} from "../../../../constants/apiUrls";

import { baseQueryWithReAuth } from "../../../../redux/api/baseQuery";

export const friendsApi = createApi({
    reducerPath: "friendsApi",
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({
        usersList: builder.query({
            query: () => ({
                url: URL_FRIENDS_USERSLIST,
            }),
        }),
    }),
});

export const { useUsersListQuery } = friendsApi;
