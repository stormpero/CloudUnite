import { Box } from "@mui/material";
import React from "react";
import { TYPE_FOLDER } from "../../../constants/googleFileTypes";
import { Loading } from "../../../UI/Loading";
import {
    useGetFolderFilesGoogleQuery
} from "../store/api/diskSpaceApi";
import { FilesGrid } from "./FilesGrid";
import { FoldersGrid } from "./FoldersGrid";

export const DiskSpaceGoogle = () => {
    const { data, isLoading } = useGetFolderFilesGoogleQuery("root");

    if (isLoading) {
        return <Loading />;
    }

    const dirArray = data.filter((el) => el.mimeType === TYPE_FOLDER);
    const filesArray = data.filter((el) => el.type !== TYPE_FOLDER);

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
