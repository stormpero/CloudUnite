import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DiskSpace } from "../../../../modules/DiskSpace";
import { Loading } from "../../../../UI/Loading";
import { useLazyGetFolderFilesQuery } from "../../store/api/diskYandexApi";

export const DiskFilesYandex = () => {
    const [files, setFiles] = useState([]);
    const [getFolderFiles] = useLazyGetFolderFilesQuery();
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        let path = decodeURIComponent(location.pathname)
            .split("/")
            .filter((x) => x)
            .slice(3)
            .join("/");

        if (path === "") {
            path = "/";
        }

        const getFolderFilesAsync = async () => {
            try {
                const filesData = await getFolderFiles(path, true).unwrap();
                setFiles(filesData.items);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getFolderFilesAsync();
    }, [location]);

    if (loading) {
        return <Loading />;
    }

    const dirArray = files
        .filter((el) => el.type === "dir")
        .map((el) => ({
            ...el,
            id: el.resource_id,
            path: el.path.replace("disk:/", ""),
        }));
    const filesArray = files
        .filter((el) => el.type !== "dir")
        .map((el) => ({
            ...el,
            id: el.resource_id,
        }));
    return <DiskSpace dirArray={dirArray} filesArray={filesArray} />;
};
