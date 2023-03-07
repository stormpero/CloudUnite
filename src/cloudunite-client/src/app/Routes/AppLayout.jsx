import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

import { MainContainer } from "./../components/MainContainer";
import NavBar from "../components/NavBar";

export const AppLayout = () => {
    
    return (
        <Box sx={{ display: "flex" }}>
            <NavBar />
            <MainContainer>
                <Outlet />
            </MainContainer>
        </Box>
    );
};
