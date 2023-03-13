import { Box, CircularProgress } from "@mui/material";
import React from "react";

//TODO: Loader на весь экран
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
