import { MenuItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import React from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GradeIcon from "@mui/icons-material/Grade";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";

export const ContextMenuFileItems = ({ hMenuClose }) => {
    return (
        <>
            <MenuItem onClick={hMenuClose}>
                <ListItemIcon>
                    <GroupAddIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Настроить доступ</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={hMenuClose}>
                <ListItemIcon>
                    <GradeIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Добавить в избранное</ListItemText>
            </MenuItem>
            <MenuItem onClick={hMenuClose}>
                <ListItemIcon>
                    <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Переименовать</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={hMenuClose}>
                <ListItemIcon>
                    <DownloadIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Скачать</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={hMenuClose}>
                <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Удалить</ListItemText>
            </MenuItem>
        </>
    );
};
