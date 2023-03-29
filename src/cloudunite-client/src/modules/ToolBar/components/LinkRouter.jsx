import React from "react";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const LinkRouter = (props) => {
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
