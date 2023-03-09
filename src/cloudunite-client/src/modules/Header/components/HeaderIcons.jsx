import React, { useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import { AccountCircle } from "@mui/icons-material";
import {
    Avatar,
    Badge,
    Box,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
    Typography,
} from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { setInitialState } from "../../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { useLazyLogoutQuery } from "../../../redux/api/authApi";

export const HeaderIcons = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutQuery] = useLazyLogoutQuery();

    const logout = async () => {
        try {
            const res = await logoutQuery().unwrap();
            dispatch(setInitialState());
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
            >
                <Badge>
                    <GroupIcon /> {/*TODO: Friends */}
                </Badge>
            </IconButton>
            <IconButton
                onClick={handleOpenUserMenu}
                size="large"
                edge="end"
                color="inherit"
            >
                <Avatar sx={{ width: 32, height: 32 }} src={user.picture} />
            </IconButton>
            <Menu
                id="account-menu"
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                onClick={handleCloseUserMenu}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        minWidth: "200px",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                    <Avatar src={user.picture} />
                    <Stack>
                        {user.name}
                        <Typography
                            color="text.secondary"
                            display="block"
                            variant="caption"
                        >
                            {user.email}
                        </Typography>
                    </Stack>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={logout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    );
};
