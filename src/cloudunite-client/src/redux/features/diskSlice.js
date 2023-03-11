import { createSlice } from "@reduxjs/toolkit";
import { disk } from "../../constants/diskId";

const initialState = () => ({ currentDisk: disk.google });

const slice = createSlice({
    name: "disk",
    initialState: initialState(),
    reducers: {
        setDisk: (state, { payload: { disk } }) => {
            state.currentDisk = disk;
        },
        setDefaultDisk: (state) => initialState(),
    },
});

export const { setDisk, setDefaultDisk } = slice.actions;

export default slice.reducer;

export const selectCurrentDisk = (state) => state.disk.currentDisk;
