import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
const initialState = {
  profileImageModalOn: false,
  profileNickNameModalOn: false,
  prevNickName: "",
  nextNickName: "",
  profilePasswordModalOn: false,
  passCurrentPassword: false,
  userId: ""
};
const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    PROFILE_IMAGE_MODAL(state, action) {
      state.profileImageModalOn = action.payload;
    },
    PROFILE_NICKNAME_MODAL(state, action) {
      state.profileNickNameModalOn = action.payload;
    },
    SET_NICKNAME(state, action) {
      state.prevNickName = action.payload;
    },
    EDIT_NICKNAME(state, action) {
      state.nextNickName = action.payload;
    },
    PROFILE_PASSWORD_MODAL(state, action) {
      state.profilePasswordModalOn = action.payload;
    },
    PASS_CURRENT_PASSWORD(state, action) {
      state.passCurrentPassword = action.payload;
    },
    SET_USERID(state, action) {
      state.userId = action.payload;
    }
  }
});
const {
  PROFILE_IMAGE_MODAL,
  PROFILE_NICKNAME_MODAL,
  SET_NICKNAME,
  EDIT_NICKNAME,
  PROFILE_PASSWORD_MODAL,
  PASS_CURRENT_PASSWORD,
  SET_USERID
} = profileSlice.actions;
const profileSlice$1 = profileSlice.reducer;
export {
  EDIT_NICKNAME as E,
  PROFILE_IMAGE_MODAL as P,
  SET_NICKNAME as S,
  PROFILE_NICKNAME_MODAL as a,
  PROFILE_PASSWORD_MODAL as b,
  PASS_CURRENT_PASSWORD as c,
  SET_USERID as d,
  profileSlice$1 as p
};
//# sourceMappingURL=chunk-d2c63902.js.map
