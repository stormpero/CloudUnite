import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { disk, diskName, menu, menuName } from "../constants/diskId";
import { useSelectedDisk } from "../hooks/useSelectedDisk";
import { useSelectedDiskMenu } from "../hooks/useSelectedDiskMenu";
import { useUserDisks } from "../hooks/useUserDisks";
import { setDisk, setMenu } from "../redux/features/diskSlice";

export const DiskStatus = ({ children }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const selectedDiskMenu = useSelectedDiskMenu();
    const userDisks = useUserDisks();

    useEffect(() => {
        if (!userDisks || location.pathname.includes("/login/success")) return;
        if (
            location.pathname.includes(
                `/disk/${diskName(selectedDiskMenu.currentDisk)}/${menuName(
                    selectedDiskMenu.currentMenu
                )}`
            )
        ) {
            return;
        }
        const diskNames = Object.keys(disk);
        const menuNames = Object.keys(menu);
        const userDisksArray = Object.values(userDisks);
        for (let i = 0; i < diskNames.length; i++) {
            if (
                location.pathname.includes(`/disk/${diskNames[i]}`) &&
                userDisksArray[i]
            ) {
                dispatch(setDisk(disk[diskNames[i]]));
                for (let j = 0; j < menuNames.length; j++) {
                    if (location.pathname.includes(menuNames[j])) {
                        dispatch(setMenu(menu[menuNames[j]]));
                    }
                }
                return;
            }
        }
        dispatch(setDisk(disk.google));
        navigate("disk/google/my");
    }, [location]);

    return children;
};
