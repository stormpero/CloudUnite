import React from "react";
import PropTypes from "prop-types";
import {
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Typography,
    Avatar,
    Card,
    CardHeader,
    Box,
    Badge,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import { red } from "@mui/material/colors";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 225;

const disks = [
    {
        title: "Яндекс Диск",
        icon: (
            <HomeRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        to: "/",
    },
    {
        title: "Google Диск",
        icon: (
            <HomeRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        to: "/",
    },
    {
        title: "OneDrive",
        icon: (
            <HomeRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        to: "/",
    },
];

const menuUser = [
    {
        title: "Мой диск",
        icon: (
            <HomeRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        to: "/",
    },
    {
        title: "Недавние",
        icon: (
            <StorefrontRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/marketplace",
    },
    {
        title: "Профиль",
        icon: (
            <PersonRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/profile",
    },
    {
        title: "Корзина",
        icon: (
            <QuizRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/login",
    },
];

const NavBar = ({ children }) => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Card sx={{}}>
                <CardHeader
                    sx={{
                        justifyContent: "end",
                    }}
                    avatar={
                        <ListItemButton
                            sx={{
                                marginRight: 0,
                                padding: 0,
                                borderRadius: "100px",
                                "& :hover": {
                                    transition: "none",
                                },
                            }}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: red[500],
                                    width: "35px",
                                    height: "35px",
                                }}
                                aria-label="recipe"
                            >
                                A
                            </Avatar>
                        </ListItemButton>
                    }
                    action={
                        <ListItemButton
                            sx={{
                                paddingLeft: "8px",
                                paddingRight: "8px",
                                borderRadius: "100px",
                                transition: "none",
                                marginTop: 1,
                            }}
                        >
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingBasketRoundedIcon
                                    sx={{
                                        color: "action.active",
                                    }}
                                />
                            </Badge>
                        </ListItemButton>
                    }
                    title={
                        <Box>
                            <Typography
                                sx={{
                                    width: "115px",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    fontSize: 15,
                                    cursor: "default",
                                }}
                            >
                                {"Eleanor Penaree"}
                            </Typography>
                        </Box>
                    }
                    subheader={
                        <Typography
                            sx={{
                                fontSize: 11,
                                cursor: "default",
                                color: "action.active",
                            }}
                        >
                            {"Admin"}
                        </Typography>
                    }
                />
            </Card>
            <Divider
                sx={{
                    bgcolor: "#666889",
                    //marginBottom: "10px",
                }}
            />
            <List sx={{ maxWidth: "90%" }}>
                {disks.map((item) => (
                    <ListItem
                        key={item.title}
                        component={RouterLink}
                        to={item.to}
                        disablePadding
                        sx={{
                            textDecoration: "none",
                            color: "text.primary",
                            marginLeft: "7px",
                            marginTop: "4px",
                            marginBottom: "7px",
                            "& :hover": {
                                borderRadius: "10px",
                            },
                        }}
                    >
                        <ListItemButton
                            sx={{
                                borderRadius: "10px",
                                transition: "none",
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: "39px",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <Typography
                                sx={{
                                    fontSize: 15,
                                }}
                            >
                                {item.title}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider
                sx={{
                    bgcolor: "#666889",
                    //marginBottom: "10px",
                }}
            />
            <List sx={{ maxWidth: "90%" }}>
                {menuUser.map((item) => (
                    <ListItem
                        key={item.title}
                        component={RouterLink}
                        to={item.to}
                        disablePadding
                        sx={{
                            textDecoration: "none",
                            color: "text.primary",
                            marginLeft: "7px",
                            marginTop: "4px",
                            marginBottom: "7px",
                            "& :hover": {
                                borderRadius: "10px",
                            },
                        }}
                    >
                        <ListItemButton
                            sx={{
                                borderRadius: "10px",
                                transition: "none",
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: "39px",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <Typography
                                sx={{
                                    fontSize: 15,
                                }}
                            >
                                {item.title}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

NavBar.propTypes = {
    children: PropTypes.any,
};

export default NavBar;
