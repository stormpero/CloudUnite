import React from "react";
import { Typography, Grid } from "@mui/material";
import { FolderElement } from "./Folder";

export const FoldersGrid = ({ folders }) => {
    return (
        <>
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
                {folders.map((el) => (
                    <Grid key={el.id} item>
                        <FolderElement data={el} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
