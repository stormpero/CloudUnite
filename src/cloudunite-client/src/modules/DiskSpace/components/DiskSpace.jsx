import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { TYPE_FOLDER } from "../../../constants/googleFileTypes";
import { Loading } from "../../../UI/Loading";
import { useGetFolderFilesQuery } from "../store/api/diskSpaceApi";
import { FileElement } from "./File";
import { FolderElement } from "./Folder";

export const DiskSpace = () => {
    const { data, isLoading } = useGetFolderFilesQuery("root");

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Box
            sx={{
                borderRadius: "10px",
                m: 2,
                bgcolor: "#fff",
                height: "calc(100vh - 210px)",
            }}
        >
            <Typography variant="h6" sx={{ p: 2 }}>
                Папки
            </Typography>
            <Grid
                container
                sx={{
                    padding: "0px 24px",
                }}
                gap={2}
            >
                {data
                    .filter((el) => el.mimeType === TYPE_FOLDER)
                    .map((el) => (
                        <Grid key={el.id} item>
                            <FolderElement data={el} />
                        </Grid>
                    ))}
            </Grid>
            <Typography variant="h6" sx={{ p: 2 }}>
                Файлы
            </Typography>
            <Grid
                container
                sx={{
                    padding: "0px 24px",
                }}
                gap={2}
            >
                {data
                    .filter((el) => el.mimeType !== TYPE_FOLDER)
                    .map((el) => (
                        <Grid key={el.id} item>
                            <FileElement data={el} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};
