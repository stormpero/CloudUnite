import { Box, Button, Typography } from "@mui/material";
import React from "react";

const SignUpButton = (props) => {
    return (
        <Button
            {...props}
            sx={{
                backgroundColor: "#fff",
                "&:hover": {
                    backgroundColor: "#f8faff",
                },
            }}
            variant="outlined"
            startIcon={
                <Box component="img" height="30px" src="/googleIcon.png" />
            }
        >
            <Typography variant="h6" fontSize="16px">
                Вход с аккаунтом Google
            </Typography>
        </Button>
    );
};

export default SignUpButton;
