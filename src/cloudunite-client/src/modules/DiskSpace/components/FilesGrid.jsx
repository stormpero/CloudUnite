import React from "react";
import { Grid, Typography } from "@mui/material";
import { FileElement } from "./File";

export const FilesGrid = ({ files }) => {
    return (
        <>
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
                {files.map((el) => (
                    <Grid key={el.id} item>
                        <FileElement data={el} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
