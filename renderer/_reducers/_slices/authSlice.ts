import * as toolkitRaw from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        isLoggedIn: false,
        userId: '',
        nickName: '',
        host: '',
        role: '',
    },
    reducers: {
        LOGIN(state, action: PayloadAction<boolean>) {
            state.isLoggedIn = action.payload;
        },
        SET_USERID(state, action: PayloadAction<string>) {
            state.userId = action.payload;
        },
        SET_NICKNAME(state, action: PayloadAction<string>) {
            state.nickName = action.payload;
        },
        SET_HOST(state, action: PayloadAction<string>) {
            state.host = action.payload;
        },
        SET_ROLE(state, action: PayloadAction<string>) {
            state.role = action.payload;
        },
    },
});

export const { LOGIN, SET_USERID, SET_NICKNAME, SET_HOST, SET_ROLE } = authSlice.actions;

export default authSlice.reducer;
