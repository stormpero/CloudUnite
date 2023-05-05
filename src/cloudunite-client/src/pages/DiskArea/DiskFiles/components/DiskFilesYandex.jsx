import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DiskSpace } from "../../../../modules/DiskSpace";
import { Loading } from "../../../../UI/Loading";
import { useGetFolderFilesQuery } from "../../store/api/diskYandexApi";

export const DiskFilesYandex = () => {
    const location = useLocation();
    let path = decodeURIComponent(location.pathname)
        .split("/")
        .filter((x) => x)
        .slice(3)
        .join("/");

    const { data, isLoading, refetch, isFetching } = useGetFolderFilesQuery(
        path || "/"
    );

    useEffect(() => {
        refetch();
    }, [location]);

    if (isFetching) {
        return <Loading />;
    }

    const dirArray = data.items
        .filter((el) => el.type === "dir")
        .map((el) => ({
            ...el,
            id: el.resource_id,
            path: el.path.replace("disk:/", ""),
        }));

    const filesArray = data.items
        .filter((el) => el.type !== "dir")
        .map((el) => ({
            ...el,
            id: el.resource_id,
            path: el.path.replace("disk:/", ""),
        }));

    return <DiskSpace dirArray={dirArray} filesArray={filesArray} />;
};
