import { ReduceCapacityRounded } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import { LoginSuccessPage } from "../../pages/LoginSuccessPage";
import { useLazyUserQuery } from "../../redux/api/authApi";
import { setCredentials } from "../../redux/features/authSlice";
import { RequireAuth } from "../components/ReqiureAuth";

import { AppLayout } from "./AppLayout";
import { Layout } from "./Layout";
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route element={<RequireAuth />}>
                    <Route index element={<HomePage />} />
                    <Route path="google" element={null} />
                    <Route path="yandex" element={null} />
                </Route>

                <Route path="login" element={<LoginPage />} />

                <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
            <Route path="login/success" element={<LoginSuccessPage />} />
        </Routes>
    );
};
