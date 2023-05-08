import { createSlice } from '@reduxjs/toolkit';

export interface PostSlice {
    SUBJECT: string;
    NICKNAME: string;
    TITLE: string;
    CONTENT: string;
    image: {
        FILE_INFO: [];
        RANDOM_NAME: [];
    };
}

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        SUBJECT: '',
        NICKNAME: '',
        TITLE: '',
        CONTENT: '',
        image: {
            FILE_INFO: [],
            RANDOM_NAME: [],
        },
    },
    reducers: {
        SUBJECT_STATE: (state, action: any) => {
            state.SUBJECT = action.SUBJECT;
        },
        OWNER_STATE: (state, action: any) => {
            state.NICKNAME = action.NICKNAME;
        },
        TITLE_STATE: (state, action: any) => {
            state.TITLE = action.TITLE;
        },
        CONTENT_STATE: (state, action: any) => {
            state.CONTENT = action.CONTENT;
        },
        IMAGE_STATE: (state, action: any) => {
            state.image.FILE_INFO = action.FILE_INFO;
            state.image.RANDOM_NAME = action.RANDOM_NAME;
        },
    },
});

export default postSlice.reducer;
