import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Bookmark, Like } from '../../../server/models/User';

interface ListState {
    clicked: string;
    bookmarkList: Bookmark[];
    likeList: Like[];
}

const initialState: ListState = {
    clicked: '북마크',
    bookmarkList: [],
    likeList: [],
};

const myListSlice = createSlice({
    name: 'myListSlice',
    initialState,
    reducers: {
        SHOW(state, action: PayloadAction<string>) {
            state.clicked = action.payload;
        },
        SET_MY_BOOKMARK(state, action: PayloadAction<Bookmark[]>) {
            state.bookmarkList = action.payload;
        },
        SET_MY_LIKE(state, action: PayloadAction<Like[]>) {
            state.likeList = action.payload;
        },
    },
});

export const { SHOW, SET_MY_BOOKMARK, SET_MY_LIKE } = myListSlice.actions;

export default myListSlice.reducer;
