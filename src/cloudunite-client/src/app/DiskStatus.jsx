import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { disk, diskName } from "../constants/diskId";
import { useSelectedDisk } from "../hooks/useSelectedDisk";
import { useUserDisks } from "../hooks/useUserDisks";
import { setDisk } from "../redux/features/diskSlice";

export const DiskStatus = ({ children }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const selectedDisk = useSelectedDisk();
    const userDisks = useUserDisks();

    useEffect(() => {
        if (!userDisks || location.pathname.includes("/login/success")) return;
        if (location.pathname.includes(`/disk/${diskName(selectedDisk)}`)) {
            return;
        }
        const diskNames = Object.keys(disk);
        const userDisksArray = Object.values(userDisks);
        for (let i = 0; i < diskNames.length; i++) {
            if (
                location.pathname.includes(`/disk/${diskNames[i]}`) &&
                userDisksArray[i]
            ) {
                dispatch(setDisk(disk[diskNames[i]]));
                return;
            }
        }
        dispatch(setDisk(disk.google));
        navigate("disk/google");
    }, [location]);
    return children;
};
