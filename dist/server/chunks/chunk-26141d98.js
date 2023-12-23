import * as toolkitRaw from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { p as mapSlice } from "./chunk-e0b4dacb.js";
import { r as reviewSlice } from "./chunk-4ef07e33.js";
import { p as paginationSlice } from "./chunk-9fb42db4.js";
import { p as postSlice } from "./chunk-055796d0.js";
import { m as myListSlice } from "./chunk-1a5b0e59.js";
import { p as profileSlice } from "./chunk-d2c63902.js";
import { l as loginSlice } from "./chunk-1ccf3f37.js";
import { s as signupSlice } from "./chunk-6f77cb2d.js";
const { createSlice: createSlice$1 } = toolkitRaw.default ?? toolkitRaw;
const buttonSlice = createSlice$1({
  name: "buttonSlice",
  initialState: {
    bookmark: { ON: false },
    like: { ON: false }
  },
  reducers: {
    HAS_BOOKMARK_LIST: (state, action) => {
      state.bookmark.ON = action.ON;
    },
    HAS_LIKE_LIST: (state, action) => {
      state.like.ON = action.ON;
    }
  }
});
const buttonSlice$1 = buttonSlice.reducer;
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
    userId: "",
    nickName: "",
    host: "",
    role: ""
  },
  reducers: {
    LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_USERID(state, action) {
      state.userId = action.payload;
    },
    SET_NICKNAME(state, action) {
      state.nickName = action.payload;
    },
    SET_HOST(state, action) {
      state.host = action.payload;
    },
    SET_ROLE(state, action) {
      state.role = action.payload;
    }
  }
});
authSlice.actions;
const authSlice$1 = authSlice.reducer;
const rootReducer = combineReducers({
  buttonSlice: buttonSlice$1,
  mapSlice,
  reviewSlice,
  paginationSlice,
  postSlice,
  authSlice: authSlice$1,
  myListSlice,
  profileSlice,
  loginSlice,
  signupSlice
});
const { configureStore } = toolkitRaw.default ?? toolkitRaw;
const PRELOADED_STATE = typeof window !== "undefined" ? window.__PRELOADED_STATE__ : void 0;
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: PRELOADED_STATE
});
export {
  store as s
};
//# sourceMappingURL=chunk-26141d98.js.map
