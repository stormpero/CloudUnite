import React, { useEffect, useState } from "react";
import { TYPE_FOLDER } from "../../../../constants/googleFileTypes";
import { DiskSpace } from "../../../../modules/DiskSpace";
import { Loading } from "../../../../UI/Loading";
import { useLazyGetFolderFilesQuery } from "../../store/api/diskGoogleApi";
import { useLocation } from "react-router-dom";

export const DiskFilesGoogle = () => {
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
            .join();

        if (path === "") {
            path = "root";
        }

        const getFolderFilesAsync = async () => {
            try {
                const filesData = await getFolderFiles(path, true).unwrap();
                setFiles(filesData);
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
        .filter((el) => el.mimeType === TYPE_FOLDER)
        .map((el) => ({
            ...el,
            path: el.id
        }));
    const filesArray = files.filter((el) => el.mimeType !== TYPE_FOLDER);

    return <DiskSpace dirArray={dirArray} filesArray={filesArray} />;
};
