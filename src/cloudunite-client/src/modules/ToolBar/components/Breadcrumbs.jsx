import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
        MUI
    </Link>,
    <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
    >
        Core
    </Link>,
    <Typography key="3" color="text.primary">
        Breadcrumb
    </Typography>,
];

export const BreadcrumbString = () => {
    // TODO: Integration with react-router
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
        >
            {breadcrumbs}
        </Breadcrumbs>
    );
};
