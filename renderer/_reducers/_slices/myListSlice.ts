import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    clicked: '북마크',
    orderModalOn: false,
    groupNameOrder: '등록순',
};

const myListSlice = createSlice({
    name: 'myListSlice',
    initialState,
    reducers: {
        SHOW(state, action: PayloadAction<string>) {
            state.clicked = action.payload;
        },
        ORDER_MODAL(state, action: PayloadAction<boolean>) {
            state.orderModalOn = action.payload;
        },
        ORDER_STANDARD(state, action: PayloadAction<string>) {
            state.groupNameOrder = action.payload;
        },
    },
});

export const { SHOW, ORDER_MODAL, ORDER_STANDARD } = myListSlice.actions;

export default myListSlice.reducer;
