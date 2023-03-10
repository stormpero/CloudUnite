import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const Loading = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
                m: 1,
            }}
        >
            <CircularProgress />
        </Box>
    );
};

