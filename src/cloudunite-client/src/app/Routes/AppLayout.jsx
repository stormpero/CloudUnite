import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { disk, diskName } from "../../constants/diskId";
import { useSelectedDisk } from "../../hooks/useSelectedDisk";
import { useLazyUserQuery } from "../../redux/api/authApi";
import { setCredentials } from "../../redux/features/authSlice";
import { Loading } from "../../UI/Loading";

export const AppLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedDisk = useSelectedDisk();
    const [getUsers, { isLoading }] = useLazyUserQuery();

    useEffect(() => {
        const init = async () => {
            try {
                const user = await getUsers().unwrap();
                dispatch(setCredentials(user));
                navigate("/disk/" + diskName(selectedDisk));
            } catch (err) {
                console.log(err);
            }
        };
        init();
    }, []);

    return isLoading ? <Loading /> : <Outlet />;
};
