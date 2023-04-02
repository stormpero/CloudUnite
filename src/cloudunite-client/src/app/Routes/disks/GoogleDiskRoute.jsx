import React from "react";
import { DiskFilesGoogle } from "../../../pages/DiskArea/DiskFiles";
import { DiskRoute } from "../DiskRoute";
import { ToolBar } from "../../../modules/ToolBar";
import { DiskTrashGoogle } from "../../../pages/DiskArea";
import { DiskRecentGoogle } from "../../../pages/DiskArea/DiskRecent";

export const GoogleDiskRoute = () => {
    return (
        <>
            <ToolBar />
            <DiskRoute
                myElement={<DiskFilesGoogle />}
                recentElement={<DiskRecentGoogle />}
                trashElement={<DiskTrashGoogle />}
            />
        </>
    );
};
