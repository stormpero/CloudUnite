import React from "react";
import { FileFolderBase } from "./FileFolderBase";
import ArticleIcon from "@mui/icons-material/Article";

export const FileElement = ({ name }) => {
    return (
        <FileFolderBase
            icon={<ArticleIcon sx={{ m: 2, color: "#787a7c" }} />}
            name={name}
        />
    );
};
