import { createSlice } from "@reduxjs/toolkit";

const initialState = () => ({ user: null, accessToken: null });

const slice = createSlice({
    name: "auth",
    initialState: initialState(),
    reducers: {
        setCredentials: (state, { payload: { user, accessToken } }) => {
            state.user = user;
            state.accessToken = accessToken;
        },
        setInitialState: (state) => initialState(),
    },
});

export const { setCredentials, setInitialState } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
