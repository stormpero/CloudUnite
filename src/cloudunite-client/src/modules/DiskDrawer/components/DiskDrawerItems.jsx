import {
    Box,
    Divider,
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
import { disks, menu } from "../constants/drawerItems";
import DiskSpaceInfo from "./DiskSpaceInfo";

export const DiskDrawerItems = () => {
    const disk = useSelectedDisk();
    return (
        <>
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
                <List>
                    {disks.map((item) => (
                        <ListItem
                            onClick={() => console.log(23)}
                            key={item.id}
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
                            <ListItemButton selected={item.id === disk}>
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
