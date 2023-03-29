import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TYPE_FOLDER } from "../../../constants/googleFileTypes";
import { Loading } from "../../../UI/Loading";
import { useLazyGetFolderFilesQuery } from "../store/api/diskSpaceApi";
import { FileElement } from "./File";
import { FilesGrid } from "./FilesGrid";
import { FolderElement } from "./Folder";
import { FoldersGrid } from "./FoldersGrid";

export const DiskSpaceYandex = () => {
    const [files, setFiles] = useState([]);
    const [getFolderFiles] = useLazyGetFolderFilesQuery();
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        let path = decodeURIComponent(location.pathname)
            .split("/")
            .filter((x) => x)
            .slice(2)
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

    const dirArray = files.filter((el) => el.type === "dir");
    const filesArray = files.filter((el) => el.type !== "dir");

    return (
        <Box
            sx={{
                borderRadius: "10px",
                m: 2,
                bgcolor: "#fff",
                height: "calc(100vh - 210px)",
            }}
        >
            {dirArray.length > 0 && <FoldersGrid folders={dirArray} />}
            {filesArray.length > 0 && <FilesGrid files={filesArray} />}
        </Box>
    );
};
