import { Breadcrumbs, Typography, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
// const breadcrumbs = [
//     <Link underline="hover" key="1" color="inherit" href="/">
//         MUI
//     </Link>,
//     <Link
//         underline="hover"
//         key="2"
//         color="inherit"
//         href="/material-ui/getting-started/installation/"
//     >
//         Core
//     </Link>,
//     <Typography key="3" color="text.primary">
//         Breadcrumb
//     </Typography>,
// ];

const LinkRouter = (props) => {
    return (
        <Link
            {...props}
            underline="none"
            color="inherit"
            sx={{
                padding: "5px",
                borderRadius: "10px",
                "&:hover": {
                    backgroundColor: "#ebebeb",
                },
                display: "flex",
                alignItems: "center",
            }}
            component={RouterLink}
        />
    );
};

export const BreadcrumbString = () => {
    const location = useLocation();
    const pathnames = location.pathname
        .split("/")
        .filter((x) => x)
        .slice(2);

    //TODO: DISK STATIC
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
        >
            <LinkRouter to="/disk/google">
                <HomeIcon sx={{ mr: 0.5, pb: "2px" }} fontSize="small" />
                Мой диск
            </LinkRouter>
            {pathnames.map((pathname, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                    <Typography key={routeTo}>{pathname}</Typography>
                ) : (
                    <LinkRouter key={routeTo} to={routeTo}>
                        {pathname}
                    </LinkRouter>
                );
            })}
        </Breadcrumbs>
    );
};
