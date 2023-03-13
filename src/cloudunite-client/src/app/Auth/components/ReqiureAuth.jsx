import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PageLayout } from "../../../pages/PageLayout";

export const RequireAuth = () => {
    const auth = useAuth();
    const location = useLocation();

    return auth ? (
        <PageLayout />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};
