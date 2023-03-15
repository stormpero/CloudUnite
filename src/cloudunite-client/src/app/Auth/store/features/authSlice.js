import { createSlice } from "@reduxjs/toolkit";

const initialState = () => ({ user: null, accessToken: null, disks: null });

const slice = createSlice({
    name: "auth",
    initialState: initialState(),
    reducers: {
        setCredentials: (state, { payload: { user, accessToken, disks } }) => {
            state.user = user;
            state.accessToken = accessToken;
            state.disks = disks;
        },
        setInitialState: (state) => initialState(),
    },
});

export const { setCredentials, setInitialState } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectUserDisks = (state) => state.auth.disks;
