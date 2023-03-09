import { Toolbar as MuiToolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BreadcrumbString } from "./Breadcrumbs";
import { ViewToggleButtons } from "./ViewToggleButtons";

export const ToolBar = () => {
    return (
        <MuiToolbar sx={{ display: "flex" }}>
            <BreadcrumbString />
            <Box sx={{ flexGrow: 1 }} />
            <ViewToggleButtons />
        </MuiToolbar>
    );
};
