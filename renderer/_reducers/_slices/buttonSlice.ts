import { createSlice } from '@reduxjs/toolkit';

export interface ButtonSlice {
    bookmark: {
        ON: boolean;
    };
    like: {
        ON: boolean;
    };
}

const buttonSlice = createSlice({
    name: 'buttonSlice',
    initialState: {
        bookmark: { ON: false },
        like: { ON: false },
    },
    reducers: {
        HAS_BOOKMARK_LIST: (state, action: any) => {
            state.bookmark.ON = action.ON;
        },
        HAS_LIKE_LIST: (state, action: any) => {
            state.like.ON = action.ON;
        },
    },
});

export default buttonSlice.reducer;
