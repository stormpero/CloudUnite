import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../../pages/LoginPage";
import { LoginSuccessPage } from "../../pages/LoginSuccessPage";
import { AuthStatus, RequireAuth } from "../Auth";
import { DiskStatus } from "../DiskStatus";
import { GoogleDiskRoute } from "./disks/GoogleDiskRoute";
import { OneDriveRoute } from "./disks/OneDriveRoute";
import { YandexDiskRoute } from "./disks/YandexDiskRoute";

export const AppRoutes = () => {
    return (
        <AuthStatus>
            <DiskStatus>
                <Routes>
                    <Route path="/disk" element={<RequireAuth />}>
                        <Route path="google/*" element={<GoogleDiskRoute />} />
                        <Route path="yandex/*" element={<YandexDiskRoute />} />
                        <Route path="onedrive/*" element={<OneDriveRoute />} />
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
//TODO: Not found page
