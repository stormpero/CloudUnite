import React from "react";
import PropTypes from "prop-types";

import { Box } from "@mui/material";

export const MainContainer = ({ children }) => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                bgcolor: "#1976d2",
                p: 3,
            }}
        >
            {children}
        </Box>
    );
};

MainContainer.propTypes = {
    children: PropTypes.any,
};
