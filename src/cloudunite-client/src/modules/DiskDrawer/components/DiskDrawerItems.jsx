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
import { Link as RouterLink } from "react-router-dom";
import { useSelectedDisk } from "../../../hooks/useSelectedDisk";
import { useUserDisks } from "../../../hooks/useUserDisks";
import { disks, menu } from "../constants/drawerItems";
import DiskSpaceInfo from "./DiskSpaceInfo";
import AddIcon from "@mui/icons-material/Add";
import { setCredentials } from "../../../app/Auth/store/features/authSlice";
import { useDispatch } from "react-redux";
import { useLazyUserQuery } from "../../../app/Auth/store/api/authApi";

export const DiskDrawerItems = () => {
    const disk = useSelectedDisk();
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
                                selected={item.id === disk}
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
                    {menu.map((item) => (
                        <ListItem
                            key={item.title}
                            component={RouterLink}
                            to={item.to}
                            disablePadding
                            sx={{
                                textDecoration: "none",
                                color: "text.primary",
                                marginTop: "4px",
                                marginBottom: "7px",
                            }}
                        >
                            <ListItemButton>
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
