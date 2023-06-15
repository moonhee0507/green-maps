import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
const initialState = {
  clicked: "북마크",
  orderModalOn: false,
  groupNameOrder: "등록순",
  addGroupModalOn: false,
  groupName: null,
  selectedIcon: "/images/icon-star.svg",
  editGroupModalOn: false,
  targetGroup: "",
  sameIcon: true,
  moveListModalOn: false,
  countChecked: 0,
  copyModalOn: false,
  restaurantToMove: [],
  deleteLikeListModalOn: false
};
const myListSlice = createSlice({
  name: "myListSlice",
  initialState,
  reducers: {
    SHOW(state, action) {
      state.clicked = action.payload;
    },
    ORDER_MODAL(state, action) {
      state.orderModalOn = action.payload;
    },
    ORDER_STANDARD(state, action) {
      state.groupNameOrder = action.payload;
    },
    ADD_GROUP_MODAL(state, action) {
      state.addGroupModalOn = action.payload;
    },
    SET_GROUP_NAME(state, action) {
      state.groupName = action.payload;
    },
    ICON_STANDARD(state, action) {
      state.selectedIcon = action.payload;
    },
    EDIT_GROUP_MODAL(state, action) {
      state.editGroupModalOn = action.payload;
    },
    SET_TARGET_GROUP(state, action) {
      state.targetGroup = action.payload;
    },
    COMPARE_ICON(state, action) {
      state.sameIcon = action.payload;
    },
    MOVE_LIST_MODAL(state, action) {
      state.moveListModalOn = action.payload;
    },
    INCREASE_CHECKED(state, action) {
      state.countChecked += action.payload;
    },
    DECREASE_CHECKED(state, action) {
      state.countChecked -= action.payload;
    },
    RESET_CHECKED(state) {
      state.countChecked = 0;
    },
    COPY_MODAL(state, action) {
      state.copyModalOn = action.payload;
    },
    PUSH_RESTAURANT_LIST(state, action) {
      state.restaurantToMove = action.payload;
    },
    DELETE_RESTAURANT_LIST(state, action) {
      state.restaurantToMove = action.payload;
    },
    RESET_RESTAURANT_LIST(state, action) {
      state.restaurantToMove = action.payload;
    },
    DELETE_LIKELIST_MODAL(state, action) {
      state.deleteLikeListModalOn = action.payload;
    }
  }
});
const {
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
  DELETE_LIKELIST_MODAL
} = myListSlice.actions;
const myListSlice$1 = myListSlice.reducer;
export {
  ADD_GROUP_MODAL as A,
  COPY_MODAL as C,
  DECREASE_CHECKED as D,
  EDIT_GROUP_MODAL as E,
  ICON_STANDARD as I,
  MOVE_LIST_MODAL as M,
  ORDER_MODAL as O,
  PUSH_RESTAURANT_LIST as P,
  RESET_CHECKED as R,
  SET_TARGET_GROUP as S,
  ORDER_STANDARD as a,
  SET_GROUP_NAME as b,
  INCREASE_CHECKED as c,
  DELETE_RESTAURANT_LIST as d,
  RESET_RESTAURANT_LIST as e,
  DELETE_LIKELIST_MODAL as f,
  COMPARE_ICON as g,
  SHOW as h,
  myListSlice$1 as m
};
