import React from "react";
import { MenuItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

export const ContextMenuAreaItems = ({ hMenuClose }) => {
    return (
        <>
            <MenuItem onClick={hMenuClose}>
                <ListItemIcon>
                    <CreateNewFolderIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Новая папка</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={hMenuClose}>
                <ListItemIcon>
                    <FileUploadIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Загрузить файлы</ListItemText>
            </MenuItem>
        </>
    );
};
