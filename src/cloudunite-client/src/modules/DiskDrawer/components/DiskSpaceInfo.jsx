import React from "react";
import {
    Box,
    CircularProgress,
    LinearProgress,
    Typography,
} from "@mui/material";
import { bytesToGB, diskSpacePercent } from "../helpers/diskSpacePercent";
import { useStorageQuotaQuery } from "../store/api/storageApi";
import { Loading } from "../../../UI/Loading";
import { useSelectedDisk } from "../../../hooks/useSelectedDisk";

const DiskSpaceInfo = () => {
    const disk = useSelectedDisk();
    const { data: storageQuota, isLoading } = useStorageQuotaQuery(disk);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Box sx={{ width: "85%", m: "15px" }}>
            <Typography variant="h6" sx={{ fontSize: "14px", mb: 1 }}>
                Хранилище
            </Typography>
            <LinearProgress
                variant="determinate"
                value={diskSpacePercent(storageQuota.usage, storageQuota.limit)}
                sx={{ height: "5px", mb: "2px", borderRadius: 5 }}
            />
            <Typography fontSize="13px" noWrap>
                {bytesToGB(storageQuota.usage)} Использовано из{" "}
                {bytesToGB(storageQuota.limit)}
            </Typography>
        </Box>
    );
};

export default DiskSpaceInfo;
