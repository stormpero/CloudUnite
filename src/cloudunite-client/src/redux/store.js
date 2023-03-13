import { configureStore } from "@reduxjs/toolkit";
import { storageQuotaApi } from "../modules/DiskDrawer";
import { apiAuth } from "../app/Auth/store/api/authApi";
import authReducer from "../app/Auth/store/features/authSlice";
import diskReducer from "./features/diskSlice";

export const store = configureStore({
    reducer: {
        [apiAuth.reducerPath]: apiAuth.reducer,
        [storageQuotaApi.reducerPath]: storageQuotaApi.reducer,
        auth: authReducer,
        disk: diskReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            apiAuth.middleware,
            storageQuotaApi.middleware,
        ]),
});
