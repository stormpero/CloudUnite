import { createApi } from "@reduxjs/toolkit/query/react";
import { URL_AUTH_LOGOUT, URL_GOOGLE_USER } from "../../../../constants/apiUrls";

import { baseQueryWithAuth } from "../../../../redux/api/baseQuery";

export const apiAuth = createApi({
    reducerPath: "authApi",
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        user: builder.query({
            query: () => ({
                url: URL_GOOGLE_USER,
                credentials: "include",
            }),
        }),
        logout: builder.query({
            query: () => ({
                url: URL_AUTH_LOGOUT,
                credentials: "include",
            }),
        }),
    }),
});

export const { useLazyUserQuery, useLazyLogoutQuery } = apiAuth;
