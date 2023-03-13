import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    URL_AUTH_LOGOUT,
    URL_GOOGLE_USER,
    URL_ROOT,
} from "../../../../constants/apiUrls";

export const apiAuth = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: URL_ROOT,
        prepareHeaders: (headers, { getState }) => {
            const token = getState()?.auth?.accessToken;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
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
