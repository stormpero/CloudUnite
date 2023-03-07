import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useLazyUserQuery } from "../../redux/api/authApi";
import { setCredentials } from "../../redux/features/authSlice";

export const Layout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getUsers, { isLoading }] = useLazyUserQuery();
    useEffect(() => {
        const init = async () => {
            try {
                const user = await getUsers().unwrap();
                dispatch(setCredentials(user));
                navigate("/");
            } catch (err) {
                console.log(err);
            }
        };
        init();
    }, []);

    return isLoading ? <CircularProgress /> : <Outlet />;
};
