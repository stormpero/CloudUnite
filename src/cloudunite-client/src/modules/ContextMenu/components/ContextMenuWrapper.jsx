import { Box } from "@mui/system";
import React, { useState } from "react";
import { ContextMenu } from "./ContextMenu";
import { ContextMenuAreaItems } from "./ContextMenuAreaItems";

export const ContextMenuWrapper = ({ children }) => {
    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = (event) => {
        event.preventDefault();
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
                <ContextMenuAreaItems hMenuClose={handleContextMenuClose} />
            </ContextMenu>
        </Box>
    );
};
