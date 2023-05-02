import { createSlice } from '@reduxjs/toolkit';
import type {
    RandomFileName,
    SelectedImage,
} from '../../../pages/search/restaurant/review/ReviewForm/component/PictureSection';

export interface ReviewSlice {
    ID: string;
    image: {
        FILE_INFO: Array<SelectedImage>;
        RANDOM_NAME: Array<RandomFileName>;
    };
    CONTENT: string;
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
    },
});

export default reviewSlice.reducer;
