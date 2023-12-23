import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = (toolkitRaw == null ? void 0 : toolkitRaw.default) ?? toolkitRaw;
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
  selectedCategory: "*",
  noResultModalOn: false,
  searchResultInPage: [],
  selectedCert: [],
  resultOrderBy: "relevance"
};
const mapSlice = createSlice({
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
const {
  SET_MAP_MODE,
  CHANGE_RADIUS_MODAL,
  SET_RADIUS,
  SET_RESULT_IN_RADIUS,
  SET_NEAREST_LIST,
  CHECK_LOCATION_ACCESS_MODAL,
  SET_CURRENT_LOCATION,
  CHANGE_REGION_MODAL,
  SET_CURRENT_SIDO,
  SET_CURRENT_SIGUNGU,
  SET_SELECTED_SIDO,
  SET_SELECTED_SIGUNGU,
  SHOW_LIST_IN_REGION_MODAL,
  SET_LIST_IN_PAGE,
  SET_TOTAL_IN_REGION,
  RESET_LIST_IN_PAGE,
  RESET_TOTAL_IN_REGION,
  CATEGORY_FILTER_MODAL,
  ADD_SELECTED_CATEGORY,
  NO_RESULT_MODAL,
  SET_SEARCH_RESULT_IN_PAGE,
  ADD_SELECTED_CERT,
  SET_ORDER_BY
} = mapSlice.actions;
const mapSlice$1 = mapSlice.reducer;
export {
  ADD_SELECTED_CATEGORY as A,
  CHANGE_RADIUS_MODAL as C,
  NO_RESULT_MODAL as N,
  RESET_LIST_IN_PAGE as R,
  SET_RADIUS as S,
  SET_SELECTED_SIDO as a,
  SET_CURRENT_LOCATION as b,
  CHANGE_REGION_MODAL as c,
  SET_SELECTED_SIGUNGU as d,
  SHOW_LIST_IN_REGION_MODAL as e,
  SET_LIST_IN_PAGE as f,
  SET_TOTAL_IN_REGION as g,
  SET_CURRENT_SIDO as h,
  SET_CURRENT_SIGUNGU as i,
  RESET_TOTAL_IN_REGION as j,
  CATEGORY_FILTER_MODAL as k,
  CHECK_LOCATION_ACCESS_MODAL as l,
  ADD_SELECTED_CERT as m,
  SET_ORDER_BY as n,
  SET_SEARCH_RESULT_IN_PAGE as o,
  mapSlice$1 as p,
  SET_MAP_MODE as q,
  SET_RESULT_IN_RADIUS as r,
  SET_NEAREST_LIST as s
};
//# sourceMappingURL=chunk-e0b4dacb.js.map
