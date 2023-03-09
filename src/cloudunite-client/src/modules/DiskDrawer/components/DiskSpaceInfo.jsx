import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { diskSpacePercent } from "../helpers/diskSpacePercent";

const DiskSpaceInfo = () => {
    const usedSpace = 12.3;
    const allSpace = 15;

    return (
        <Box sx={{ width: "85%", m: "15px" }}>
            <Typography variant="h6" sx={{ fontSize: "14px", mb: 1 }}>
                Хранилище
            </Typography>
            <LinearProgress
                variant="determinate"
                value={diskSpacePercent(usedSpace, allSpace)}
                sx={{ height: "5px", mb: "2px", borderRadius: 5 }}
            />
            <Typography fontSize="13px" noWrap>
                {usedSpace} ГБ Использовано из {allSpace} ГБ
            </Typography>
        </Box>
    );
};

export default DiskSpaceInfo;
