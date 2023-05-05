import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { IconDrawer } from "./IconDrawer";
import { SearchInput } from "./SearchInput";
import { HeaderIcons } from "./HeaderIcons";

export const Header = ({ drawerToggle, friendsDrawerToggle }) => {
    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar sx={{ paddingLeft: { sm: "0" } }}>
                <IconDrawer drawerToggle={drawerToggle} />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        width: "240px",
                        textAlign: "center",
                    }}
                >
                    CloudUnite
                </Typography>
                <SearchInput />
                <Box sx={{ flexGrow: 1 }} />
                <HeaderIcons friendsDrawerToggle={friendsDrawerToggle} />
            </Toolbar>
        </AppBar>
    );
};
