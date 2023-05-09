import { createSlice } from '@reduxjs/toolkit';
import type { Post } from '../../../server/models/Post';

export interface PostSlice {
    SUBJECT: string;
    NICKNAME: string;
    TITLE: string;
    CONTENT: string;
    image: {
        FILE_INFO: [];
        RANDOM_NAME: [];
    };
    post: {
        LIST: Array<Post>;
        TOTAL: number;
        CURRENT_PAGE: number;
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
        post: {
            LIST: [],
            TOTAL: 0,
            CURRENT_PAGE: 1,
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
        POST_IN_PAGE: (state, action: any) => {
            // state.post.LIST = action.LIST;
            state.post.TOTAL = action.TOTAL;
            state.post.CURRENT_PAGE = action.CURRENT_PAGE;
        },
    },
});

export default postSlice.reducer;
