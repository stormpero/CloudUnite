import React from "react";
import { DiskTrashYandex } from "../../../pages/DiskArea";
import { DiskFilesYandex } from "../../../pages/DiskArea/DiskFiles";
import { DiskRecentYandex } from "../../../pages/DiskArea/DiskRecent";
import { DiskRoute } from "../DiskRoute";
import { ToolBar } from "../../../modules/ToolBar";
import { ContextMenuYandex } from "../../../modules/ContextMenu";

export const YandexDiskRoute = () => {
    return (
        <>
            <ToolBar />
            <DiskRoute
                myElement={
                    <ContextMenuYandex>
                        <DiskFilesYandex />
                    </ContextMenuYandex>
                }
                recentElement={<DiskRecentYandex />}
                trashElement={<DiskTrashYandex />}
            />
        </>
    );
};
