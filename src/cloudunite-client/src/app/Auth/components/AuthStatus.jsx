import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { diskName } from "../../../constants/diskId";
import { useSelectedDisk } from "../../../hooks/useSelectedDisk";
import { useLazyUserQuery } from "../store/api/authApi";
import { setCredentials } from "../store/features/authSlice";
import { Loading } from "../../../UI/Loading";

export const AuthStatus = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getUsers, { isLoading }] = useLazyUserQuery();
    const [isLoadingAuth, setisLoadingAuth] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const user = await getUsers().unwrap();
                dispatch(setCredentials(user));
            } catch (err) {
                navigate("/login");
            } finally {
                setisLoadingAuth(false);
            }
        };
        checkAuth();
    }, []);

    return isLoadingAuth ? <Loading /> : children;
};
