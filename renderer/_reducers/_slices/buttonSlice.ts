import * as toolkitRaw from '@reduxjs/toolkit';

const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

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
