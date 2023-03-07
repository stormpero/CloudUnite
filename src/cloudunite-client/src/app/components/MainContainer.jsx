import React from "react";
import PropTypes from "prop-types";

import { Box } from "@mui/material";

export const MainContainer = ({ children }) => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                bgcolor: "background.default",
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
