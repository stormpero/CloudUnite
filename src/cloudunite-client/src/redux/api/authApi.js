import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { POST } from "./consts/methods";
import {
    URL_AUTH_LOGOUT,
    URL_GOOGLE_LOGIN,
    URL_GOOGLE_USER,
    URL_ROOT,
} from "./consts/urls";

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

console.log(apiAuth);

export const { useLazyUserQuery, useLazyLogoutQuery } = apiAuth;
