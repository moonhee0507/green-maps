import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Review } from '../../../server/models/Review';
import type { CommentInPost } from '../../../server/models/Post';

export type ReviewPagination = {
    [key: number]: Review[];
};

export type CommentPagination = {
    [key: number]: CommentInPost[];
};

export interface PaginationSlice {
    review: ReviewPagination;
    currentPage: number;
}

const paginationSlice = createSlice({
    name: 'paginationSlice',
    initialState: {
        review: {},
        currentPage: 1,
        comment: {},
    },
    reducers: {
        SET_REVIEW: (state, action: PayloadAction<ReviewPagination>) => {
            state.review = action.payload;
        },
        CURRENT_PAGE: (state, action: any) => {
            // 댓글에서 사용
            state.currentPage = action.currentPage;
        },
        SET_COMMENT: (state, action: PayloadAction<CommentPagination>) => {
            state.comment = action.payload;
        },
    },
});

export const { SET_REVIEW, SET_COMMENT } = paginationSlice.actions;

export default paginationSlice.reducer;
