import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { theme } from "./globalStyles";

export const GlobalTheme = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </>
    );
};

GlobalTheme.propTypes = {
    children: PropTypes.any,
};
