import * as toolkitRaw from '@reduxjs/toolkit';

const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

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
    countChecked: number;
    copyModalOn: boolean;
    restaurantToMove: Array<string>;
    deleteLikeListModalOn: boolean;
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
    countChecked: 0,
    copyModalOn: false,
    restaurantToMove: [],
    deleteLikeListModalOn: false,
};

const myListSlice = createSlice({
    name: 'myListSlice',
    initialState,
    reducers: {
        SHOW(state, action: toolkitRaw.PayloadAction<string>) {
            state.clicked = action.payload;
        },
        ORDER_MODAL(state, action: toolkitRaw.PayloadAction<boolean>) {
            state.orderModalOn = action.payload;
        },
        ORDER_STANDARD(state, action: toolkitRaw.PayloadAction<string>) {
            state.groupNameOrder = action.payload;
        },
        ADD_GROUP_MODAL(state, action: toolkitRaw.PayloadAction<boolean>) {
            state.addGroupModalOn = action.payload;
        },
        SET_GROUP_NAME(state, action: toolkitRaw.PayloadAction<null | string>) {
            state.groupName = action.payload;
        },
        ICON_STANDARD(state, action: toolkitRaw.PayloadAction<string>) {
            state.selectedIcon = action.payload;
        },
        EDIT_GROUP_MODAL(state, action: toolkitRaw.PayloadAction<boolean>) {
            state.editGroupModalOn = action.payload;
        },
        SET_TARGET_GROUP(state, action: toolkitRaw.PayloadAction<string>) {
            state.targetGroup = action.payload;
        },
        COMPARE_ICON(state, action: toolkitRaw.PayloadAction<boolean>) {
            state.sameIcon = action.payload;
        },
        MOVE_LIST_MODAL(state, action: toolkitRaw.PayloadAction<boolean>) {
            state.moveListModalOn = action.payload;
        },
        INCREASE_CHECKED(state, action: toolkitRaw.PayloadAction<number>) {
            state.countChecked += action.payload;
        },
        DECREASE_CHECKED(state, action: toolkitRaw.PayloadAction<number>) {
            state.countChecked -= action.payload;
        },
        RESET_CHECKED(state) {
            state.countChecked = 0;
        },
        COPY_MODAL(state, action: toolkitRaw.PayloadAction<boolean>) {
            state.copyModalOn = action.payload;
        },
        PUSH_RESTAURANT_LIST(state, action: toolkitRaw.PayloadAction<string[]>) {
            state.restaurantToMove = action.payload;
        },
        DELETE_RESTAURANT_LIST(state, action: toolkitRaw.PayloadAction<string[]>) {
            state.restaurantToMove = action.payload;
        },
        RESET_RESTAURANT_LIST(state, action: toolkitRaw.PayloadAction<[]>) {
            state.restaurantToMove = action.payload;
        },
        DELETE_LIKELIST_MODAL(state, action: toolkitRaw.PayloadAction<boolean>) {
            state.deleteLikeListModalOn = action.payload;
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
    INCREASE_CHECKED,
    DECREASE_CHECKED,
    RESET_CHECKED,
    COPY_MODAL,
    PUSH_RESTAURANT_LIST,
    DELETE_RESTAURANT_LIST,
    RESET_RESTAURANT_LIST,
    DELETE_LIKELIST_MODAL,
} = myListSlice.actions;

export default myListSlice.reducer;
