import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const IconDrawer = () => {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
                display: { xs: "inline-flex", sm: "none" },
                mr: 2,
            }}
        >
            <MenuIcon />
        </IconButton>
    );
};
