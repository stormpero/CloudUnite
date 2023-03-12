import { Box } from "@mui/material";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { DiskDrawer } from "../modules/DiskDrawer/components/DiskDrawer";
import { Header } from "../modules/Header";
import { PageLayout } from "./PageLayout";

const HomePage = () => {
    return (
        <Box>
            <Link to="folder1/folder2/folder3/folder1/folder2/folder3">
                3213
            </Link>
        </Box>
    );
};

export default HomePage;
