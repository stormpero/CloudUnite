import { ButtonBase, Box, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { ContextMenuWrapperFile } from "../../ContextMenu/components/ContextMenuWrapperFile";

export const FileFolderBase = ({ icon, data }) => {
    //TODO: ContexMenu in map
    return (
        <ContextMenuWrapperFile>
            <ButtonBase
                component={RouterLink}
                to={data?.path}
                sx={{
                    borderRadius: "10px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "240px",
                        height: "50px",
                        backgroundColor: "#e1e5ea",
                        alignItems: "center",
                        borderRadius: "10px",
                    }}
                >
                    {icon}
                    <Typography
                        variant="h6"
                        fontSize="15px"
                        sx={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                        }}
                    >
                        {data.name}
                    </Typography>
                </Box>
            </ButtonBase>
        </ContextMenuWrapperFile>
    );
};
