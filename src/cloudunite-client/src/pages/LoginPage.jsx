import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import SignUpButton from "../UI/SignUpButton";
import { useLazyUserQuery } from "../app/Auth/store/api/authApi";
import { setCredentials } from "../app/Auth/store/features/authSlice";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { diskName } from "../constants/diskId";
import { useSelectedDisk } from "../hooks/useSelectedDisk";
import { useAuth } from "../app/Auth/hooks/useAuth";
import { Container, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [getUsers] = useLazyUserQuery();
    const auth = useAuth();

    const google = () => {
        const googleWindow = window.open(
            "http://localhost:7493/api/oauth",
            "_blank",
            "width=500,height=600"
        );
        let timer = null;
        if (googleWindow) {
            timer = setInterval(async () => {
                if (googleWindow.closed) {
                    try {
                        const user = await getUsers().unwrap();
                        console.log(user);
                        dispatch(setCredentials(user));
                    } catch (err) {
                        console.log(err);
                    }
                    if (timer) clearInterval(timer);
                }
            }, 500);
        }
    };

    if (auth) {
        return <Navigate to="/disk/google" replace />;
    }

    // #34a8c8
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${"/loginbg.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    color="#fff"
                    fontWeight="500"
                    sx={{ mb: 2 }}
                >
                    CloudUnite
                </Typography>
                <SignUpButton onClick={google} />
            </Box>
        </Box>
    );
};

export default LoginPage;
