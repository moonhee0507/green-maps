import * as toolkitRaw from '@reduxjs/toolkit';

const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

const signupSlice = createSlice({
    name: 'signupSlice',
    initialState: {
        isSigningUp: false,
    },
    reducers: {
        SIGNING_UP: (state, action: toolkitRaw.PayloadAction<boolean>) => {
            state.isSigningUp = action.payload;
        },
    },
});

export const { SIGNING_UP } = signupSlice.actions;

export default signupSlice.reducer;
