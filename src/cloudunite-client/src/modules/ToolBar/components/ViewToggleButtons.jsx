import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

export const ViewToggleButtons = () => {
    const [view, setView] = useState("list");

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return (
        <ToggleButtonGroup value={view} exclusive onChange={handleChange}>
            <ToggleButton value="list" aria-label="list">
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module">
                <ViewModuleIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};
