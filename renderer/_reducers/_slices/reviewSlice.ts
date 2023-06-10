import * as toolkitRaw from '@reduxjs/toolkit';
import type {
    RandomFileName,
    SelectedImage,
} from '../../../pages/search/restaurant/reviews/create/ReviewForm/component/PictureSection';

const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
interface InitialState {
    ID: string;
    image: {
        FILE_INFO: Array<SelectedImage>;
        RANDOM_NAME: Array<RandomFileName>;
    };
    CONTENT: string;
    editDeleteNotifyModalOn: boolean;
    sameUserOwner: boolean;
    reviewId: string;
    restaurantId: string;
}

const initialState: InitialState = {
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
};

const reviewSlice = createSlice({
    name: 'reviewSlice',
    initialState: initialState,
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
        EDIT_DELETE_NOTIFY_MODAL: (state, action: toolkitRaw.PayloadAction<boolean>) => {
            state.editDeleteNotifyModalOn = action.payload;
        },
        SAME_USER_OWNER: (state, action: toolkitRaw.PayloadAction<boolean>) => {
            state.sameUserOwner = action.payload;
        },
        SET_REVIEW_ID: (state, action: toolkitRaw.PayloadAction<string>) => {
            state.reviewId = action.payload;
        },
        SET_RESTAURANT_ID: (state, action: toolkitRaw.PayloadAction<string>) => {
            state.restaurantId = action.payload;
        },
    },
});

export const { EDIT_DELETE_NOTIFY_MODAL, SAME_USER_OWNER, SET_REVIEW_ID, SET_RESTAURANT_ID } = reviewSlice.actions;

export default reviewSlice.reducer;
