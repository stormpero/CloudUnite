import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { AppLayout } from "../Routes/AppLayout";

export const RequireAuth = () => {
    const accessToken = useAuth();
    const location = useLocation();

    return !accessToken ? (
        <AppLayout />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};
