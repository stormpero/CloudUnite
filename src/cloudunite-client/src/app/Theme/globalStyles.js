import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1c1c53",
            dark: "#2c2d40",
        },
        secondary: {
            main: "#5700f2",
        },
        background: {
            paper: "#1c1c53",
            default: "#0d0c28",
        },
        text: {
            primary: "#FFF",
            secondary: "#d1d1dc",
        },
        action: {
            active: "#d1d1dc",
            hover: "#5700f2",
            selected: "#5700f2",
        },
    },
});
