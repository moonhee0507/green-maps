import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    profileImageModalOn: false,
    profileNickNameModalOn: false,
    prevNickName: '',
    nextNickName: '',
    profilePasswordModalOn: false,
};

const profileSlice = createSlice({
    name: 'profileSlice',
    initialState: initialState,
    reducers: {
        PROFILE_IMAGE_MODAL(state, action: PayloadAction<boolean>) {
            state.profileImageModalOn = action.payload;
        },
        PROFILE_NICKNAME_MODAL(state, action: PayloadAction<boolean>) {
            state.profileNickNameModalOn = action.payload;
        },
        SET_NICKNAME(state, action: PayloadAction<string>) {
            state.prevNickName = action.payload;
        },
        EDIT_NICKNAME(state, action: PayloadAction<string>) {
            state.nextNickName = action.payload;
        },
        PROFILE_PASSWORD_MODAL(state, action: PayloadAction<boolean>) {
            state.profilePasswordModalOn = action.payload;
        },
    },
});

export const { PROFILE_IMAGE_MODAL, PROFILE_NICKNAME_MODAL, SET_NICKNAME, EDIT_NICKNAME, PROFILE_PASSWORD_MODAL } =
    profileSlice.actions;

export default profileSlice.reducer;
