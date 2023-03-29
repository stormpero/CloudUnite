import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentDiskMenu } from "../redux/features/diskSlice";

export const useSelectedDiskMenu = () => {
    return useSelector(selectCurrentDiskMenu);
};
