import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    isLoggingIn: false,
    currentId: ""
  },
  reducers: {
    // 로그인 화면 진입 중에는 톱바의 뒤로가기 숨기기
    LOGGING_IN: (state, action) => {
      state.isLoggingIn = action.payload;
    },
    SET_ID: (state, action) => {
      state.currentId = action.payload;
    }
  }
});
const { LOGGING_IN, SET_ID } = loginSlice.actions;
const loginSlice$1 = loginSlice.reducer;
export {
  LOGGING_IN as L,
  SET_ID as S,
  loginSlice$1 as l
};
