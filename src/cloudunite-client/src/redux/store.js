import { configureStore } from "@reduxjs/toolkit";
import { apiAuth } from "./api/authApi";
import authReducer from "./features/authSlice";

export const store = configureStore({
    reducer: {
        [apiAuth.reducerPath]: apiAuth.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiAuth.middleware),
});
