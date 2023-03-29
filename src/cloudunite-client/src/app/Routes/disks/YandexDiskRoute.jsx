import React from "react";
import { DiskTrashYandex } from "../../../pages/DiskArea";
import { DiskFilesYandex } from "../../../pages/DiskArea/DiskFiles";
import { DiskRecentYandex } from "../../../pages/DiskArea/DiskRecent";
import { DiskRoute } from "../DiskRoute";

export const YandexDiskRoute = () => {
    return (
        <DiskRoute
            myElement={<DiskFilesYandex />}
            recentElement={<DiskRecentYandex />}
            trashElement={<DiskTrashYandex />}
        />
    );
};
