import React from "react";
import { Menu } from "@mui/material";

export const ContextMenu = ({ contextMenu, hMenuClose, children }) => {
    return (
        <Menu
            open={contextMenu !== null}
            onClose={hMenuClose}
            anchorReference="anchorPosition"
            anchorPosition={
                contextMenu !== null
                    ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                    : undefined
            }
        >
            {children}
        </Menu>
    );
};
