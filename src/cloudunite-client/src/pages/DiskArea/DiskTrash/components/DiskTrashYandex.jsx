import React, { useState } from "react";
import { DiskSpace } from "../../../../modules/DiskSpace";
import { Loading } from "../../../../UI/Loading";
import { useGetTrashFilesQuery } from "../../store/api/diskYandexApi";

export const DiskTrashYandex = () => {
    const { data, isLoading } = useGetTrashFilesQuery("/");

    if (isLoading) {
        return <Loading />;
    }

    const dirArray = data.items
        .filter((el) => el.type === "dir")
        .map((el) => ({
            ...el,
            id: el.resource_id,
            path: null,
        }));
    const filesArray = data.items
        .filter((el) => el.type !== "dir")
        .map((el) => ({
            ...el,
            id: el.resource_id,
        }));
    return <DiskSpace dirArray={dirArray} filesArray={filesArray} />;
};
