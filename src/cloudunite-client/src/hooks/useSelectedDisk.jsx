import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentDisk } from "../redux/features/diskSlice";

export const useSelectedDisk = () => {
    return useSelector(selectCurrentDisk);
};
