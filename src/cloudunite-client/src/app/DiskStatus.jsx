import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { disk, diskName } from "../constants/diskId";
import { useSelectedDisk } from "../hooks/useSelectedDisk";
import { setDisk } from "../redux/features/diskSlice";

export const DiskStatus = ({ children }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const selectedDisk = useSelectedDisk();

    useEffect(() => {
        if (location.pathname.includes(`/disk/${diskName(selectedDisk)}`)) {
            return;
        }
        const diskNames = Object.keys(disk);
        for (let i = 0; i < diskNames.length; i++) {
            if (location.pathname.includes(`/disk/${diskNames[i]}`)) {
                dispatch(setDisk(disk[diskNames[i]]));
                return;
            }
        }
        dispatch(setDisk(disk.google));
    }, [location]);
    return children;
};
