import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import {
    setCredentials,
    setInitialState,
} from "../../app/Auth/store/features/authSlice";
import { URL_GOOGLE_USER, URL_ROOT } from "../../constants/apiUrls";

const baseQueryWithCredentials = fetchBaseQuery({
    baseUrl: URL_ROOT,
    credentials: "include",
});

export const baseQueryWithAuth = fetchBaseQuery({
    baseUrl: URL_ROOT,
    prepareHeaders: (headers, { getState }) => {
        const accessToken = getState().auth.accessToken;
        if (accessToken) {
            headers.set("authorization", `Bearer ${accessToken}`);
        }
        return headers;
    },
});

export const baseQueryWithReAuth = async (args, api, extraOptions) => {
    let result = await baseQueryWithAuth(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // try to get a new token
        const refreshResult = await baseQueryWithCredentials(
            URL_GOOGLE_USER,
            api,
            extraOptions
        );

        if (refreshResult.data) {
            api.dispatch(setCredentials(refreshResult.data));
            result = await baseQueryWithAuth(args, api, extraOptions);
        } else {
            api.dispatch(setInitialState());
        }
    }
    return result;
};
