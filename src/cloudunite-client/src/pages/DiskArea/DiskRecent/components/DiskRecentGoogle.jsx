import React from "react";
import { Loading } from "../../../../UI/Loading";
import { TYPE_FOLDER } from "../../../../constants/googleFileTypes";
import { DiskSpace } from "../../../../modules/DiskSpace";
import { useGetRecentFilesQuery } from "../../store/api/diskGoogleApi";

export const DiskRecentGoogle = () => {
    const { data, isLoading } = useGetRecentFilesQuery();

    if (isLoading) {
        return <Loading />;
    }

    const dirArray = data.filter((el) => el.mimeType === TYPE_FOLDER);
    const filesArray = data.filter((el) => el.type !== TYPE_FOLDER);

    return <DiskSpace dirArray={dirArray} filesArray={filesArray} />;
};
