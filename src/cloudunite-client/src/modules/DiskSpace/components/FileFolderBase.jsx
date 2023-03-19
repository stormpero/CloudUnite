import { ButtonBase, Box, Typography } from "@mui/material";
import React from "react";
import { ContextMenuWrapperFile } from "../../ContextMenu/components/ContextMenuWrapperFile";
import { Link as RouterLink } from "react-router-dom";
import { useSelectedDisk } from "../../../hooks/useSelectedDisk";
import { diskName } from "../../../constants/diskId";

export const FileFolderBase = ({ icon, data }) => {
    //TODO: ContexMenu in map
    const selectedDisk = useSelectedDisk();
    return (
        <ContextMenuWrapperFile>
            <ButtonBase
                component={RouterLink}
                to={data.path.replace("disk:", diskName(selectedDisk))}
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
