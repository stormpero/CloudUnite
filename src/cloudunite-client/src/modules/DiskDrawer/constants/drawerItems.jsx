import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import DiskIcon from "../../../UI/DiskIcon";

export const disks = [
    {
        title: "Google Drive",
        icon: <DiskIcon imgPath="./icons/google_drive.png" />,
        to: "/",
    },
    {
        title: "Яндекс Диск",
        icon: <DiskIcon imgPath="./icons/yandex_disk.png" />,
        to: "/",
    },
    {
        title: "OneDrive",
        icon: <DiskIcon imgPath="./icons/onedrive.png" />,
        to: "/",
    },
];

export const menu = [
    {
        title: "Мой диск",
        icon: <FolderOpenOutlinedIcon />,
        to: "/",
    },
    {
        title: "Недавние",
        icon: <AccessTimeIcon />,
        to: "/recent",
    },
    {
        title: "Корзина",
        icon: <DeleteOutlineOutlinedIcon />,
        to: "/trash",
    },
];
