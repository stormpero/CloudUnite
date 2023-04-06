import React from "react";
import { MenuItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

export const ContextMenuAreaItems = ({
    funcNewFolder,
    funcUploadFiles,
    hMenuClose,
}) => {
    const funcNewFolderWithClose = () => {
        funcNewFolder();
        hMenuClose();
    };

    const funcUploadFilesWithClose = () => {
        funcUploadFiles();
        hMenuClose();
    };

    return (
        <>
            <MenuItem onClick={funcNewFolderWithClose}>
                <ListItemIcon>
                    <CreateNewFolderIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Новая папка</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={funcUploadFilesWithClose}>
                <ListItemIcon>
                    <FileUploadIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Загрузить файлы</ListItemText>
            </MenuItem>
        </>
    );
};
