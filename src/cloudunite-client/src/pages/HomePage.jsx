import { Box } from "@mui/material";
import React from "react";
import { useLazyStorageQuotaQuery } from "../modules/DiskDrawer/store/api/storageApi";

const HomePage = () => {
    const [getTest] = useLazyStorageQuotaQuery(); //TODO: delete

    return (
        <Box>
            {/* <Link to="folder1/folder2/folder3/folder1/folder2/folder3">
                3213
            </Link>
            <Button
                onClick={() => {
                    getTest();
                }}
            >Тест</Button> */}
        </Box>
    );
};

export default HomePage;
