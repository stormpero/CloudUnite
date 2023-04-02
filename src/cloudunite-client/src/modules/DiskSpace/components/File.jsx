import React from "react";
import { FileFolderBase } from "./FileFolderBase";
import ArticleIcon from "@mui/icons-material/Article";
import { Box } from "@mui/material";

const FileIcon = ({ iconUrl }) => {
    return (
        <Box
            component="img"
            sx={{ width: "20px", height: "20px", margin: "16px" }}
            src={iconUrl}
        />
    );
};

export const FileElement = ({ data }) => {
    return (
        <FileFolderBase
            icon={
                data.iconLink ? (
                    <FileIcon iconUrl={data.iconLink} />
                ) : (
                    <ArticleIcon sx={{ m: 2, color: "#787a7c" }} />
                )
            }
            data={data}
        />
    );
};
