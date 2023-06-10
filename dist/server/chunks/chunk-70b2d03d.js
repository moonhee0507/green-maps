import * as toolkitRaw from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { r as reviewSlice } from "./chunk-4ef07e33.js";
import { p as paginationSlice } from "./chunk-9fb42db4.js";
import { p as postSlice } from "./chunk-3e2eef8e.js";
import { m as myListSlice } from "./chunk-62270999.js";
import { p as profileSlice } from "./chunk-ef8ab02b.js";
const { createSlice: createSlice$4 } = toolkitRaw.default ?? toolkitRaw;
const buttonSlice = createSlice$4({
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
const { createSlice: createSlice$3 } = toolkitRaw.default ?? toolkitRaw;
const initialState = {
  COUNT: 0,
  mapMode: "반경탐색 모드",
  radiusModalOn: false,
  radius: 500,
  resultInRadius: [],
  nearest: [],
  checkGeolocationModalOn: false,
  currentLocation: [37.5666805, 126.9784147],
  regionModalOn: false,
  currentSido: "",
  currentSigungu: "",
  selectedSido: "",
  selectedSigungu: "",
  showListInRegionModalOn: false,
  listInPage: [],
  totalInRegion: 0,
  categoryFilterModalOn: false,
  selectedCategory: [],
  noResultModalOn: false,
  searchResultInPage: [],
  selectedCert: [],
  resultOrderBy: "relevance"
};
const mapSlice = createSlice$3({
  name: "mapSlice",
  initialState,
  reducers: {
    CHANGED_CENTER: (state, action) => {
      state.COUNT = action.COUNT;
    },
    SET_MAP_MODE: (state, action) => {
      state.mapMode = action.payload;
    },
    CHANGE_RADIUS_MODAL: (state, action) => {
      state.radiusModalOn = action.payload;
    },
    SET_RADIUS: (state, action) => {
      state.radius = action.payload;
    },
    SET_RESULT_IN_RADIUS: (state, action) => {
      state.resultInRadius = action.payload;
    },
    SET_NEAREST_LIST: (state, action) => {
      state.nearest = action.payload;
    },
    CHECK_LOCATION_ACCESS_MODAL: (state, action) => {
      state.checkGeolocationModalOn = action.payload;
    },
    SET_CURRENT_LOCATION: (state, action) => {
      state.currentLocation = action.payload;
    },
    CHANGE_REGION_MODAL: (state, action) => {
      state.regionModalOn = action.payload;
    },
    SET_CURRENT_SIDO: (state, action) => {
      state.currentSido = action.payload;
    },
    SET_CURRENT_SIGUNGU: (state, action) => {
      state.currentSigungu = action.payload;
    },
    SET_SELECTED_SIDO: (state, action) => {
      state.selectedSido = action.payload;
    },
    SET_SELECTED_SIGUNGU: (state, action) => {
      state.selectedSigungu = action.payload;
    },
    SHOW_LIST_IN_REGION_MODAL: (state, action) => {
      state.showListInRegionModalOn = action.payload;
    },
    SET_LIST_IN_PAGE: (state, action) => {
      state.listInPage = action.payload;
    },
    SET_TOTAL_IN_REGION: (state, action) => {
      state.totalInRegion = action.payload;
    },
    RESET_LIST_IN_PAGE: (state) => {
      state.listInPage = [];
    },
    RESET_TOTAL_IN_REGION: (state) => {
      state.totalInRegion = 0;
    },
    CATEGORY_FILTER_MODAL: (state, action) => {
      state.categoryFilterModalOn = action.payload;
    },
    ADD_SELECTED_CATEGORY: (state, action) => {
      state.selectedCategory = action.payload;
    },
    NO_RESULT_MODAL: (state, action) => {
      state.noResultModalOn = action.payload;
    },
    SET_SEARCH_RESULT_IN_PAGE: (state, action) => {
      state.searchResultInPage = action.payload;
    },
    ADD_SELECTED_CERT: (state, action) => {
      state.selectedCert = action.payload;
    },
    SET_ORDER_BY: (state, action) => {
      state.resultOrderBy = action.payload;
    }
  }
});
mapSlice.actions;
const mapSlice$1 = mapSlice.reducer;
const { createSlice: createSlice$2 } = toolkitRaw.default ?? toolkitRaw;
const authSlice = createSlice$2({
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
const { createSlice: createSlice$1 } = toolkitRaw.default ?? toolkitRaw;
const loginSlice = createSlice$1({
  name: "loginSlice",
  initialState: {
    isLoggingIn: false
  },
  reducers: {
    // 로그인 화면 진입 중에는 톱바의 뒤로가기 숨기기
    LOGGING_IN: (state, action) => {
      state.isLoggingIn = action.payload;
    }
  }
});
loginSlice.actions;
const loginSlice$1 = loginSlice.reducer;
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
const signupSlice = createSlice({
  name: "signupSlice",
  initialState: {
    isSigningUp: false
  },
  reducers: {
    SIGNING_UP: (state, action) => {
      state.isSigningUp = action.payload;
    }
  }
});
signupSlice.actions;
const signupSlice$1 = signupSlice.reducer;
const rootReducer = combineReducers({
  buttonSlice: buttonSlice$1,
  mapSlice: mapSlice$1,
  reviewSlice,
  paginationSlice,
  postSlice,
  authSlice: authSlice$1,
  myListSlice,
  profileSlice,
  loginSlice: loginSlice$1,
  signupSlice: signupSlice$1
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
