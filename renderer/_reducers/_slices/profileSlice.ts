import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    profileImageModalOn: false,
    profileNickNameModalOn: false,
    prevNickName: '',
    nextNickName: '',
    profilePasswordModalOn: false,
    passCurrentPassword: false,
    userId: '',
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
        PASS_CURRENT_PASSWORD(state, action: PayloadAction<boolean>) {
            state.passCurrentPassword = action.payload;
        },
        SET_USERID(state, action: PayloadAction<string>) {
            state.userId = action.payload;
        },
    },
});

export const {
    PROFILE_IMAGE_MODAL,
    PROFILE_NICKNAME_MODAL,
    SET_NICKNAME,
    EDIT_NICKNAME,
    PROFILE_PASSWORD_MODAL,
    PASS_CURRENT_PASSWORD,
    SET_USERID,
} = profileSlice.actions;

export default profileSlice.reducer;
