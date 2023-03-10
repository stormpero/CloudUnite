import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FileElement } from "./File";
import { FolderElement } from "./Folder";

export const FilesArea = () => {
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
                <Grid item>
                    <FolderElement name="Minecraft" />
                </Grid>
                <Grid item>
                    <FolderElement name="Minecraft" />
                </Grid>
                <Grid item>
                    <FolderElement name="Minecraft" />
                </Grid>
                <Grid item>
                    <FolderElement name="Minecraft" />
                </Grid>
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
                <Grid item>
                    <FileElement name="Документ №1" />
                </Grid>
                <Grid item>
                    <FileElement name="Документ №2" />
                </Grid>
                <Grid item>
                    <FileElement name="Документ №3" />
                </Grid>
                <Grid item>
                    <FileElement name="Документ №1" />
                </Grid>
                <Grid item>
                    <FileElement name="Документ №1" />
                </Grid>
                <Grid item>
                    <FileElement name="Документ №5" />
                </Grid>
                <Grid item>
                    <FileElement name="Документ №4" />
                </Grid>
                <Grid item>
                    <FileElement name="Документ №6" />
                </Grid>
            </Grid>
        </Box>
    );
};
