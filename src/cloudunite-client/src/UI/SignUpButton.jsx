import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const service = {
    google: {
        text: "Sign in with Google",
        img: "https://d2ilpn13gulr31.cloudfront.net/blog/wp-content/uploads/2018/12/drive_featured.jpg",
    },
};

const SignUpButton = ({ type, ...props }) => {
    return (
        <Button
            {...props}
            variant="outlined"
            startIcon={
                <Box component="img" height="30px" src={service[type].img} />
            }
        >
            {service[type].text}
        </Button>
    );
};

export default SignUpButton;
