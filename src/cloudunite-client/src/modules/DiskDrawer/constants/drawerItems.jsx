import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import DiskIcon from "../../../UI/DiskIcon";
import { disk } from "../../../constants/diskId";

export const disks = [
    {
        id: disk.google,
        title: "Google Drive",
        icon: <DiskIcon imgPath="/icons/google_drive.png" />,
        to: "/disk/google",
    },
    {
        id: disk.yandex,
        title: "Яндекс Диск",
        icon: <DiskIcon imgPath="/icons/yandex_disk.png" />,
        to: "/disk/yandex",
    },
    {
        id: disk.onedrive,
        title: "OneDrive",
        icon: <DiskIcon imgPath="/icons/onedrive.png" />,
        to: "/disk/onedrive",
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
