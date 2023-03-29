import React from "react";
import { DiskRoute } from "../DiskRoute";

export const OneDriveRoute = () => {
    return (
        <DiskRoute
            myElement={<h1> OneDrive myElement </h1>}
            recentElement={<h1> OneDrive recentElement </h1>}
            trashElement={<h1> OneDrive trashElement </h1>}
        />
    );
};
