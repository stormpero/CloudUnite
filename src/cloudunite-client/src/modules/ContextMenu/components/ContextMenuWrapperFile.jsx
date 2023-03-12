import { Box } from "@mui/material";
import React, { useState } from "react";
import { ContextMenu } from "./ContextMenu";
import { ContextMenuFileItems } from "./ContextMenuFileItems";

export const ContextMenuWrapperFile = ({ children }) => {
    const [contextMenu, setContextMenu] = useState(null);

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
                <ContextMenuFileItems hMenuClose={handleContextMenuClose} />
            </ContextMenu>
        </Box>
    );
};
