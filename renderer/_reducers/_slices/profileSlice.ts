import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    profileImageModalOn: false,
    image: {
        FILE_INFO: [],
        RANDOM_NAME: [],
    },
    profileNickNameModalOn: false,
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
    },
});

export const { PROFILE_IMAGE_MODAL, PROFILE_NICKNAME_MODAL } = profileSlice.actions;

export default profileSlice.reducer;
