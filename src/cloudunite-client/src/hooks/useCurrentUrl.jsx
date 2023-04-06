import React from "react";
import { useLocation } from "react-router-dom";

export const useCurrentUrl = () => {
    const location = useLocation();
    const path = decodeURIComponent(
        location.pathname
            .split("/")
            .filter((x) => x)
            .slice(3)
            .join("/")
    );
    return path;
};
