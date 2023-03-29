import { Breadcrumbs as MuiBreadcrumbs, Typography, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { useSelectedDisk } from "../../../hooks/useSelectedDisk";
import { diskName, menu } from "../../../constants/diskId";
import { LinkRouter } from "./LinkRouter";
import { useSelectedDiskMenu } from "../../../hooks/useSelectedDiskMenu";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

export const menuItems = [
    {
        id: menu.my,
        title: "Мой диск",
        to: "/my",
        icon: (
            <FolderOpenOutlinedIcon
                sx={{ mr: 0.5, pb: "2px" }}
                fontSize="small"
            />
        ),
    },
    {
        id: menu.recent,
        title: "Недавние",
        to: "/recent",
        icon: <AccessTimeIcon sx={{ mr: 0.5, pb: "2px" }} fontSize="small" />,
    },
    {
        id: menu.trash,
        title: "Корзина",
        to: "/trash",
        icon: (
            <DeleteOutlineOutlinedIcon
                sx={{ mr: 0.5, pb: "2px" }}
                fontSize="small"
            />
        ),
    },
];

export const BreadcrumbString = () => {
    const location = useLocation();
    const pathnames = location.pathname
        .split("/")
        .filter((x) => x)
        .slice(3);
    const diskMenu = useSelectedDiskMenu();

    return (
        <MuiBreadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            maxItems={5}
        >
            <LinkRouter to={`/disk/${diskName(diskMenu.currentDisk)}/my`}>
                {menuItems[diskMenu.currentMenu].icon}
                {menuItems[diskMenu.currentMenu].title}
            </LinkRouter>
            {pathnames.map((pathname, index) => {
                const routeTo = `/disk/${diskName(
                    diskMenu.currentDisk
                )}/my/${pathnames.slice(0, index + 1).join("/")}`;

                const isLast = index === pathnames.length - 1;
                const decodePathname = decodeURIComponent(pathname);
                return isLast ? (
                    <Typography key={routeTo}>{decodePathname}</Typography>
                ) : (
                    <LinkRouter key={routeTo} to={routeTo}>
                        {decodePathname}
                    </LinkRouter>
                );
            })}
        </MuiBreadcrumbs>
    );
};
