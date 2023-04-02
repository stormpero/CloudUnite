import React from "react";
import { DiskTrashYandex } from "../../../pages/DiskArea";
import { DiskFilesYandex } from "../../../pages/DiskArea/DiskFiles";
import { DiskRecentYandex } from "../../../pages/DiskArea/DiskRecent";
import { DiskRoute } from "../DiskRoute";
import { ToolBar } from "../../../modules/ToolBar";

export const YandexDiskRoute = () => {
    return (
        <>
            <ToolBar />
            <DiskRoute
                myElement={<DiskFilesYandex />}
                recentElement={<DiskRecentYandex />}
                trashElement={<DiskTrashYandex />}
            />
        </>
    );
};
