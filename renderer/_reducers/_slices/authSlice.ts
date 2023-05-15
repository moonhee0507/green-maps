import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        userId: '',
        nickName: '',
        host: '',
        role: '',
    },
    reducers: {
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

export const { SET_USERID, SET_NICKNAME, SET_HOST, SET_ROLE } = authSlice.actions;

export default authSlice.reducer;