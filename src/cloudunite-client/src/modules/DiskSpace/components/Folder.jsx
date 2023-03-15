import { Box } from "@mui/system";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import { ButtonBase, Typography } from "@mui/material";
import { FileFolderBase } from "./FileFolderBase";

export const FolderElement = ({ data }) => {
    return (
        <FileFolderBase
            icon={<FolderIcon sx={{ m: 2, color: "#787a7c" }} />}
            name={data.name}
        />
    );
};
