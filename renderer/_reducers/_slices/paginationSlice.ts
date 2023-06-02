import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CommentInPost } from '../../../server/models/Post';

export type CommentPagination = {
    [key: number]: CommentInPost[];
};

const paginationSlice = createSlice({
    name: 'paginationSlice',
    initialState: {
        review: {},
        currentPage: 1,
        comment: {},
    },
    reducers: {
        CURRENT_PAGE: (state, action: any) => {
            // 댓글에서 사용
            state.currentPage = action.currentPage;
        },
        SET_COMMENT: (state, action: PayloadAction<CommentPagination>) => {
            state.comment = action.payload;
        },
    },
});

export const { SET_COMMENT } = paginationSlice.actions;

export default paginationSlice.reducer;
