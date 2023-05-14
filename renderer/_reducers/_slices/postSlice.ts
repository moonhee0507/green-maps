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
        TOTAL: number;
        CURRENT_PAGE: number;
    };
    KEYWORD: string;
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
            TOTAL: 0,
            CURRENT_PAGE: 1,
        },
        KEYWORD: '',
        BOUNDARY: 'tc',
        ORDERBY: 'latest',
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
            state.post.TOTAL = action.TOTAL;
            state.post.CURRENT_PAGE = action.CURRENT_PAGE;
        },
        SEARCH: (state, action: any) => {
            state.KEYWORD = action.KEYWORD;
        },
        SEARCH_POOL: (state, action: any) => {
            state.BOUNDARY = action.BOUNDARY;
        },
        SEARCH_ORDER: (state, action: any) => {
            state.ORDERBY = action.ORDERBY;
        },
    },
});

export default postSlice.reducer;
