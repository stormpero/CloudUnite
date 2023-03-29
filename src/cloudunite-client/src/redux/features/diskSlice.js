import { createSlice } from "@reduxjs/toolkit";
import { disk, menu } from "../../constants/diskId";

const initialState = () => ({ currentDisk: disk.google, currentMenu: menu.my });

const slice = createSlice({
    name: "disk",
    initialState: initialState(),
    reducers: {
        setDisk: (state, { payload }) => {
            state.currentDisk = payload;
        },
        setMenu: (state, { payload }) => {
            state.currentMenu = payload;
        },
        setDefaultDisk: (state) => initialState(),
    },
});

export const { setDisk, setDefaultDisk, setMenu } = slice.actions;

export default slice.reducer;

export const selectCurrentDiskMenu = (state) => state.disk;

export const selectCurrentDisk = (state) => state.disk.currentDisk;

export const selectCurrentMenu = (state) => state.disk.currentMenu;
