import { createSlice } from '@reduxjs/toolkit';
import type { Post } from '../../../server/models/Post';

export type PostPagination = {
    [key: number]: Post[];
};

export interface PostSlice {
    SUBJECT: string;
    NICKNAME: string;
    TITLE: string;
    CONTENT: string;
    image: {
        FILE_INFO: [];
        RANDOM_NAME: [];
    };
    PAGINATE: PostPagination;
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
        PAGINATE: {},
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
        PAGINATE: (state, action: any) => {
            state.PAGINATE = action.PAGINATE;
        },
    },
});

export default postSlice.reducer;
