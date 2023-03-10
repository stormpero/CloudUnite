import { configureStore } from "@reduxjs/toolkit";
import { storageQuotaApi } from "../modules/DiskDrawer";
import { apiAuth } from "./api/authApi";
import authReducer from "./features/authSlice";

export const store = configureStore({
    reducer: {
        [apiAuth.reducerPath]: apiAuth.reducer,
        [storageQuotaApi.reducerPath]: storageQuotaApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            apiAuth.middleware,
            storageQuotaApi.middleware,
        ]),
});
