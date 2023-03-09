import { Drawer, Toolbar } from "@mui/material";
import React from "react";
import { drawerWidth } from "../constants/drawerWidth";
import { DiskDrawerItems } from "./DiskDrawerItems";

export const DiskDrawerMobile = ({ mobileDrawerOpen, mobileDrawerToggle }) => {
    return (
        <Drawer
            variant="temporary"
            open={mobileDrawerOpen}
            onClose={mobileDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                },
            }}
        >
            <DiskDrawerItems />
        </Drawer>
    );
};
