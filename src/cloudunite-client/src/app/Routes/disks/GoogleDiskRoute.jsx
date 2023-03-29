import React from "react";
import { DiskRoute } from "../DiskRoute";

export const GoogleDiskRoute = () => {
    return (
        <DiskRoute
            myElement={<h1> Google myElement </h1>}
            recentElement={<h1> Google recentElement </h1>}
            trashElement={<h1> Google trashElement </h1>}
        />
    );
};
