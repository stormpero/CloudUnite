import React from "react";
import { TYPE_FOLDER } from "../../../../constants/googleFileTypes";
import { DiskSpace } from "../../../../modules/DiskSpace";
import { Loading } from "../../../../UI/Loading";
import { useGetFolderFilesQuery } from "../../store/api/diskGoogleApi";

export const DiskRecentGoogle = () => {
    const { data, isLoading } = useGetFolderFilesQuery("root");

    if (isLoading) {
        return <Loading />;
    }

    const dirArray = data.filter((el) => el.mimeType === TYPE_FOLDER);
    const filesArray = data.filter((el) => el.type !== TYPE_FOLDER);

    return <DiskSpace dirArray={dirArray} filesArray={filesArray} />;
};
