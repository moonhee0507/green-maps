import { createSlice } from '@reduxjs/toolkit';
import { Review } from '../../../server/models/Review';

export type ReviewPagination = {
    [key: number]: Review[];
};

export interface PaginationSlice {
    reviews: ReviewPagination;
    currentPage: number;
}

const paginationSlice = createSlice({
    name: 'paginationSlice',
    initialState: {
        reviews: {},
        currentPage: 1,
    },
    reducers: {
        REVIEWS: (state, action: any) => {
            state.reviews = action.reviews;
        },
        CURRENT_PAGE: (state, action: any) => {
            state.currentPage = action.currentPage;
        },
    },
});

export default paginationSlice.reducer;
