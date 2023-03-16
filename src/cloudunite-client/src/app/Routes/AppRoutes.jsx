import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import { LoginSuccessPage } from "../../pages/LoginSuccessPage";
import { AuthStatus, RequireAuth } from "../Auth";
import { DiskStatus } from "../DiskStatus";

export const AppRoutes = () => {
    return (
        <AuthStatus>
            <DiskStatus>
                <Routes>
                    <Route path="/disk" element={<RequireAuth />}>
                        <Route path="google/*" element={<HomePage />} />
                        <Route path="yandex/*" element={<HomePage />} />
                        <Route path="onedrive/*" element={null} />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/login/success"
                        element={<LoginSuccessPage />}
                    />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </DiskStatus>
        </AuthStatus>
    );
};
