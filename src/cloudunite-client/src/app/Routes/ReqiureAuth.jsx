import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { PageLayout } from "../../pages/PageLayout";

export const RequireAuth = () => {
    const accessToken = useAuth();
    const location = useLocation();

    return accessToken ? (
        <PageLayout />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};
