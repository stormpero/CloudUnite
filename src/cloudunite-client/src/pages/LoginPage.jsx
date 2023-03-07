import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import SignUpButton from "../UI/SignUpButton";
import { Button } from "@mui/material";
import axios from "axios";
import { useLazyUserQuery } from "../redux/api/authApi";
import { setCredentials } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getUsers] = useLazyUserQuery();

    const google = () => {
        const googleWindow = window.open(
            "http://localhost:7493/api/auth/google",
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
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                    }
                    if (timer) clearInterval(timer);
                }
            }, 500);
        }
    };

    const drive = async () => {
        try {
            const response = await axios.get(
                "http://localhost:7493/api/auth/google/drive",
                {
                    headers: {
                        Authorization: "Bearer " + user?.accessToken, //the token is a variable which holds the token
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
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
                <Button onClick={drive}>Drive</Button>
            </Box>
        </Box>
    );
};

export default LoginPage;