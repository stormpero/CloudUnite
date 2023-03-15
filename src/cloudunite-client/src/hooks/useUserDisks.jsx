import React from "react";
import { useSelector } from "react-redux";
import { selectUserDisks } from "../app/Auth/store/features/authSlice";

export const useUserDisks = () => {
    return useSelector(selectUserDisks);
};
