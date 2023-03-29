import AddIcon from "@mui/icons-material/Add";
import {
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useLazyUserQuery } from "../../../app/Auth/store/api/authApi";
import { setCredentials } from "../../../app/Auth/store/features/authSlice";
import { diskName } from "../../../constants/diskId";
import { useSelectedDisk } from "../../../hooks/useSelectedDisk";
import { useSelectedDiskMenu } from "../../../hooks/useSelectedDiskMenu";
import { useUserDisks } from "../../../hooks/useUserDisks";
import { disks, menus } from "../constants/drawerItems";
import DiskSpaceInfo from "./DiskSpaceInfo";

export const DiskDrawerItems = () => {
    const diskMenu = useSelectedDiskMenu();
    const userDisks = useUserDisks();
    const userDiskArray = Object.values(userDisks);

    const dispatch = useDispatch();
    const [getUsers] = useLazyUserQuery();
    const windowLogin = (diskId) => {
        const url =
            diskId === 1 ? "http://localhost:7493/api/disk/yandex/login" : null;
        //TODO: Для всех дисков
        const yandexWindow = window.open(url, "_blank", "width=500,height=600");
        let timer = null;
        if (yandexWindow) {
            timer = setInterval(async () => {
                if (yandexWindow.closed) {
                    try {
                        const user = await getUsers().unwrap();
                        console.log(user);
                        dispatch(setCredentials(user));
                    } catch (err) {
                        console.log(err);
                    }
                    if (timer) clearInterval(timer);
                }
            }, 500);
        }
    };

    return (
        <>
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
                <List>
                    {disks.map((item) => (
                        <ListItem
                            key={item.id}
                            disableGutters
                            disablePadding
                            secondaryAction={
                                !userDiskArray[item.id] && (
                                    <IconButton
                                        edge="end"
                                        onClick={() => windowLogin(item.id)}
                                        sx={{
                                            marginRight: "2px",
                                        }}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                )
                            }
                        >
                            <ListItemButton
                                component={RouterLink}
                                to={item.to}
                                disabled={!userDiskArray[item.id]}
                                selected={item.id === diskMenu.currentDisk}
                                sx={{
                                    textDecoration: "none",
                                    color: "text.primary",
                                    paddingTop: "12px",
                                    paddingBottom: "12px",
                                    "&.Mui-selected": {
                                        backgroundColor: "#e1e5ea",
                                        borderRight: "3px solid #1976d2",
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: "39px",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {menus.map((item) => (
                        <ListItem
                            key={item.title}
                            disablePadding
                            disableGutters
                        >
                            <ListItemButton
                                component={RouterLink}
                                to={`/disk/${diskName(diskMenu.currentDisk)}${
                                    item.to
                                }`}
                                selected={item.id === diskMenu.currentMenu}
                                sx={{
                                    textDecoration: "none",
                                    color: "text.primary",
                                    paddingTop: "12px",
                                    paddingBottom: "12px",
                                    "&.Mui-selected": {
                                        backgroundColor: "#e1e5ea",
                                        borderRight: "3px solid #1976d2",
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: "39px",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <DiskSpaceInfo />
            </Box>
        </>
    );
};
