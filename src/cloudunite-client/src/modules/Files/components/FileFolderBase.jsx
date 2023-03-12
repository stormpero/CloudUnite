import { ButtonBase, Box, Typography } from "@mui/material";
import React from "react";
import { ContextMenuWrapperFile } from "../../ContextMenu/components/ContextMenuWrapperFile";

export const FileFolderBase = ({ icon, name }) => {
    //TODO: ContexMenu in map
    return (
        <ContextMenuWrapperFile>
            <ButtonBase
                sx={{
                    borderRadius: "10px",
                }}
                onDoubleClick={() => console.log("DOUBLE CLICK")}
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
                        {name}
                    </Typography>
                </Box>
            </ButtonBase>
        </ContextMenuWrapperFile>
    );
};
