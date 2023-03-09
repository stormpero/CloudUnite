import { Drawer, Toolbar } from "@mui/material";
import React from "react";
import { drawerWidth } from "../constants/drawerWidth";
import { DiskDrawerItems } from "./DiskDrawerItems";

export const DiskDrawerDesktop = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                display: { xs: "none", sm: "block" },
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <DiskDrawerItems />
        </Drawer>
    );
};
