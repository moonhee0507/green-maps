import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name: 'signupSlice',
    initialState: {
        isSigningUp: false,
    },
    reducers: {
        SIGNING_UP: (state, action: PayloadAction<boolean>) => {
            state.isSigningUp = action.payload;
        },
    },
});

export const { SIGNING_UP } = signupSlice.actions;

export default signupSlice.reducer;
