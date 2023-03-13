import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { diskName } from "../../../constants/diskId";
import { useSelectedDisk } from "../../../hooks/useSelectedDisk";
import { useLazyUserQuery } from "../store/api/authApi";
import { setCredentials } from "../store/features/authSlice";
import { Loading } from "../../../UI/Loading";

export const AuthStatus = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedDisk = useSelectedDisk();
    const [getUsers, { isLoading }] = useLazyUserQuery();

    const [isLoadingAuth, setisLoadingAuth] = useState(false);
    //TODO: clear route history after login
    useEffect(() => {
        setisLoadingAuth(true);
        const checkAuth = async () => {
            try {
                const user = await getUsers().unwrap();
                dispatch(setCredentials(user));
                navigate("/disk/" + diskName(selectedDisk), { replace: true });
            } catch (err) {
                navigate("/login");
                console.log(err);
            } finally {
                setisLoadingAuth(false);
            }
        };
        checkAuth();
    }, []);
    return isLoadingAuth ? <Loading /> : children;
};
