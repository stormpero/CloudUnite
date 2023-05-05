import { configureStore } from "@reduxjs/toolkit";
import { storageQuotaApi } from "../modules/DiskDrawer";
import { apiAuth } from "../app/Auth/store/api/authApi";
import authReducer from "../app/Auth/store/features/authSlice";
import diskReducer from "./features/diskSlice";
import { diskGoogleApi, diskYandexApi } from "../pages/DiskArea";
import { friendsApi } from "../modules/FriendsDrawer/store/api/friendsApi";

export const store = configureStore({
    reducer: {
        [apiAuth.reducerPath]: apiAuth.reducer,
        [storageQuotaApi.reducerPath]: storageQuotaApi.reducer,
        [diskGoogleApi.reducerPath]: diskGoogleApi.reducer,
        [diskYandexApi.reducerPath]: diskYandexApi.reducer,
        [friendsApi.reducerPath]: friendsApi.reducer,
        auth: authReducer,
        disk: diskReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            apiAuth.middleware,
            storageQuotaApi.middleware,
            diskGoogleApi.middleware,
            diskYandexApi.middleware,
            friendsApi.middleware,
        ]),
});
