import React from "react";
import { Box } from "@mui/material";
import { FilesGrid } from "./FilesGrid";
import { FoldersGrid } from "./FoldersGrid";

export const DiskSpace = ({ dirArray, filesArray }) => {
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
