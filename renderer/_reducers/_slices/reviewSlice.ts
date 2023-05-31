import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
    RandomFileName,
    SelectedImage,
} from '../../../pages/search/restaurant/reviews/create/ReviewForm/component/PictureSection';

export interface ReviewSlice {
    ID: string;
    image: {
        FILE_INFO: Array<SelectedImage>;
        RANDOM_NAME: Array<RandomFileName>;
    };
    CONTENT: string;
    editDeleteNotifyModalOn: boolean;
}

const reviewSlice = createSlice({
    name: 'reviewSlice',
    initialState: {
        ID: '',
        image: {
            FILE_INFO: [],
            RANDOM_NAME: [],
        },
        CONTENT: '',
        editDeleteNotifyModalOn: false,
        sameUserOwner: false,
        reviewId: '',
        restaurantId: '',
    },
    reducers: {
        OWNER_STATE: (state, action: any) => {
            state.ID = action.ID;
        },
        IMAGE_STATE: (state, action: any) => {
            state.image.FILE_INFO = action.FILE_INFO;
            state.image.RANDOM_NAME = action.RANDOM_NAME;
        },
        TXT_REVIEW_STATE: (state, action: any) => {
            state.CONTENT = action.CONTENT;
        },
        EDIT_DELETE_NOTIFY_MODAL: (state, action: PayloadAction<boolean>) => {
            state.editDeleteNotifyModalOn = action.payload;
        },
        SAME_USER_OWNER: (state, action: PayloadAction<boolean>) => {
            state.sameUserOwner = action.payload;
        },
        SET_REVIEW_ID: (state, action: PayloadAction<string>) => {
            state.reviewId = action.payload;
        },
        SET_RESTAURANT_ID: (state, action: PayloadAction<string>) => {
            state.restaurantId = action.payload;
        },
    },
});

export const { EDIT_DELETE_NOTIFY_MODAL, SAME_USER_OWNER, SET_REVIEW_ID, SET_RESTAURANT_ID } = reviewSlice.actions;

export default reviewSlice.reducer;
