import React, { useReducer } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ContextMenuWrapper } from "../modules/ContextMenu";
import { DiskDrawer } from "../modules/DiskDrawer";
import { Header } from "../modules/Header";
import { ToolBar } from "../modules/ToolBar/components/ToolBar";
import { FriendsDrawer } from "../modules/FriendsDrawer";

export const PageLayout = () => {
    const [mobileDrawerOpen, mobileDrawerToggle] = useReducer(
        (state) => !state,
        false
    );
    //TODO: Friends drawer
    const [friendsDrawerOpen, friendsDrawerToggle] = useReducer(
        (state) => !state,
        false
    );

    return (
        <Box sx={{ display: "flex" }}>
            <Header
                drawerToggle={mobileDrawerToggle}
                friendsDrawerToggle={friendsDrawerToggle}
            />
            <DiskDrawer
                mobileDrawerOpen={mobileDrawerOpen}
                mobileDrawerToggle={mobileDrawerToggle}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    mt: { xs: "56px", sm: "64px" },
                    mr: "-300px",
                    bgcolor: "#f7f9fc",
                    height: "calc(100vh-250px)",
                }}
            >
                <Outlet />
            </Box>
            <FriendsDrawer open={friendsDrawerOpen} />
        </Box>
    );
};
