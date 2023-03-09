import { Box } from "@mui/material";
import React from "react";

const DiskIcon = ({ imgPath }) => {
    return (
        <Box
            component="img"
            src={imgPath}
            sx={{ width: "24px", height: "24px" }}
        ></Box>
    );
};

export default DiskIcon;
