import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import SignUpButton from "../UI/SignUpButton";
import { useLazyUserQuery } from "../app/Auth/store/api/authApi";
import { setCredentials } from "../app/Auth/store/features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getUsers] = useLazyUserQuery();

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
                        navigate("/disk/google");
                    } catch (err) {
                        console.log(err);
                    }
                    if (timer) clearInterval(timer);
                }
            }, 500);
        }
    };
    // #34a8c8
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${"/cloud.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Box
                sx={{
                    bgcolor: "red",
                    width: "300px",
                    height: "450px",
                    marginLeft: "40%",
                }}
            >
                <SignUpButton type="google" onClick={google} />
            </Box>
        </Box>
    );
};

export default LoginPage;
