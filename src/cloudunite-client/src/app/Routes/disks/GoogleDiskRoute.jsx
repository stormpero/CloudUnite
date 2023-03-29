import React from "react";
import { DiskFilesGoogle } from "../../../pages/DiskArea/DiskFiles";
import { DiskRoute } from "../DiskRoute";

export const GoogleDiskRoute = () => {
    return (
        <DiskRoute
            myElement={<DiskFilesGoogle />}
            recentElement={<h1> Google recentElement </h1>}
            trashElement={<h1> Google trashElement </h1>}
        />
    );
};
