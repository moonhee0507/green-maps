import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    clicked: string;
    orderModalOn: boolean;
    groupNameOrder: string;
    addGroupModalOn: boolean;
    groupName: null | string;
    selectedIcon: string;
    editGroupModalOn: boolean;
    targetGroup: string;
    sameIcon: boolean;
    moveListModalOn: boolean;
};

const initialState: InitialState = {
    clicked: '북마크',
    orderModalOn: false,
    groupNameOrder: '등록순',
    addGroupModalOn: false,
    groupName: null,
    selectedIcon: '/images/icon-star.svg',
    editGroupModalOn: false,
    targetGroup: '',
    sameIcon: true,
    moveListModalOn: false,
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
        ADD_GROUP_MODAL(state, action: PayloadAction<boolean>) {
            state.addGroupModalOn = action.payload;
        },
        SET_GROUP_NAME(state, action: PayloadAction<null | string>) {
            state.groupName = action.payload;
        },
        ICON_STANDARD(state, action: PayloadAction<string>) {
            state.selectedIcon = action.payload;
        },
        EDIT_GROUP_MODAL(state, action: PayloadAction<boolean>) {
            state.editGroupModalOn = action.payload;
        },
        SET_TARGET_GROUP(state, action: PayloadAction<string>) {
            state.targetGroup = action.payload;
        },
        COMPARE_ICON(state, action: PayloadAction<boolean>) {
            state.sameIcon = action.payload;
        },
        MOVE_LIST_MODAL(state, action: PayloadAction<boolean>) {
            state.moveListModalOn = action.payload;
        },
    },
});

export const {
    SHOW,
    ORDER_MODAL,
    ORDER_STANDARD,
    ADD_GROUP_MODAL,
    SET_GROUP_NAME,
    ICON_STANDARD,
    EDIT_GROUP_MODAL,
    SET_TARGET_GROUP,
    COMPARE_ICON,
    MOVE_LIST_MODAL,
} = myListSlice.actions;

export default myListSlice.reducer;
