import { Box } from "@mui/material";
import React, { useState } from "react";
import { ContextMenu } from "./ContextMenu";
import { ContextMenuFileItems } from "./ContextMenuFileItems";
import {
    useDeleteFileOrFolderMutation,
    useLazyGetFileDownloadLinkQuery,
} from "../../../pages/DiskArea/store/api/diskYandexApi";
import { useCurrentUrl } from "../../../hooks/useCurrentUrl";

const downloadByLink = (link) => {
    let a = document.createElement("a");
    a.href = link;
    a.click();
};

export const ContextMenuWrapperFile = ({ children, id }) => {
    const [contextMenu, setContextMenu] = useState(null);
    const [getDownloadFileLink] = useLazyGetFileDownloadLinkQuery();
    const [deleteFile] = useDeleteFileOrFolderMutation();

    const handleDownloadFileLink = async () => {
        handleContextMenuClose();
        try {
            const filesData = await getDownloadFileLink(
                `/${id}`,
                true
            ).unwrap();
            downloadByLink(filesData?.href);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteFile = async () => {
        handleContextMenuClose();
        try {
            await deleteFile({
                folderPath: `/${id}`,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleContextMenu = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setContextMenu(
            contextMenu === null
                ? {
                      mouseX: event.clientX + 2,
                      mouseY: event.clientY - 6,
                  }
                : null
        );
    };

    const handleContextMenuClose = () => {
        setContextMenu(null);
    };

    return (
        <Box
            onContextMenu={handleContextMenu}
            style={{ cursor: "context-menu" }}
        >
            {children}
            <ContextMenu
                contextMenu={contextMenu}
                hMenuClose={handleContextMenuClose}
            >
                <ContextMenuFileItems
                    handleDownloadFileLink={handleDownloadFileLink}
                    handleDeleteFile={handleDeleteFile}
                    hMenuClose={handleContextMenuClose}
                />
            </ContextMenu>
        </Box>
    );
};
