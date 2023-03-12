import React, { useReducer } from "react";
import { Box } from "@mui/material";
import { DiskDrawer } from "../modules/DiskDrawer";
import { Header } from "../modules/Header";
import { Outlet } from "react-router-dom";
import { ToolBar } from "../modules/ToolBar/components/ToolBar";
import { FilesArea } from "../modules/Files/components/FilesArea";
import { ContextMenuWrapper } from "../modules/ContextMenu";

export const PageLayout = () => {
    const [mobileDrawerOpen, mobileDrawerToggle] = useReducer(
        (state) => !state,
        false
    );

    return (
        <Box sx={{ display: "flex" }}>
            <Header drawerToggle={mobileDrawerToggle} />
            <DiskDrawer
                mobileDrawerOpen={mobileDrawerOpen}
                mobileDrawerToggle={mobileDrawerToggle}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    mt: { xs: "56px", sm: "64px" },
                    bgcolor: "#f7f9fc",
                    height: "calc(100vh-250px)",
                }}
            >
                <ToolBar />
                <ContextMenuWrapper>
                    <FilesArea />
                </ContextMenuWrapper>
                <Outlet />
            </Box>
        </Box>
    );
};
