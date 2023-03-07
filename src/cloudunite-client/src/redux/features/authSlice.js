import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "auth",
    initialState: { user: null, accessToken: null },
    reducers: {
        setCredentials: (state, { payload: { user, accessToken } }) => {
            state.user = user;
            state.accessToken = accessToken;
        },
    },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
