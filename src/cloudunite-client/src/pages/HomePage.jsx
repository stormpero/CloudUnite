import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { DiskDrawer } from "../modules/DiskDrawer/components/DiskDrawer";
import { useLazyStorageQuotaQuery } from "../modules/DiskDrawer/store/api/storageApi";
import { Header } from "../modules/Header";
import { PageLayout } from "./PageLayout";

const HomePage = () => {
    const [getTest] = useLazyStorageQuotaQuery(); //TODO: delete

    return (
        <Box>
            <Link to="folder1/folder2/folder3/folder1/folder2/folder3">
                3213
            </Link>
            <Button
                onClick={() => {
                    getTest();
                }}
            >Тест</Button>
        </Box>
    );
};

export default HomePage;
