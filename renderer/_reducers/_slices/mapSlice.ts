import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../../../server/models/Restaurant';
import { KakaoLocation } from '../../../pages/search/kakaoApi/types';

export type StateToGeolocation = 'prompt' | 'denied' | 'granted';

type MapMode = '반경탐색 모드' | '지역탐색 모드' | '검색 모드';

type InitialState = {
    COUNT: number;
    mapMode: MapMode;
    radiusModalOn: boolean;
    radius: number;
    resultInRadius: Restaurant[];
    nearest: Restaurant[];
    checkGeolocationModalOn: boolean;
    currentLocation: KakaoLocation;
    regionModalOn: boolean;
    currentSido: string;
    currentSigungu: string;
    selectedSido: string;
    selectedSigungu: string;
    showListInRegionModalOn: boolean;
    listInPage: Restaurant[];
    totalInRegion: number;
    categoryFilterModalOn: boolean;
    selectedCategory: string[] | '*';
    noResultModalOn: boolean;
};

const initialState: InitialState = {
    COUNT: 0,
    mapMode: '반경탐색 모드',
    radiusModalOn: false,
    radius: 500,
    resultInRadius: [],
    nearest: [],
    checkGeolocationModalOn: false,
    currentLocation: [37.5666805, 126.9784147],
    regionModalOn: false,
    currentSido: '',
    currentSigungu: '',
    selectedSido: '',
    selectedSigungu: '',
    showListInRegionModalOn: false,
    listInPage: [],
    totalInRegion: 0,
    categoryFilterModalOn: false,
    selectedCategory: [],
    noResultModalOn: false,
};

const mapSlice = createSlice({
    name: 'mapSlice',
    initialState: initialState,
    reducers: {
        CHANGED_CENTER: (state, action: any) => {
            state.COUNT = action.COUNT;
        },
        SET_MAP_MODE: (state, action: PayloadAction<MapMode>) => {
            state.mapMode = action.payload;
        },
        CHANGE_RADIUS_MODAL: (state, action: PayloadAction<boolean>) => {
            state.radiusModalOn = action.payload;
        },
        SET_RADIUS: (state, action: PayloadAction<number>) => {
            state.radius = action.payload;
        },
        SET_RESULT_IN_RADIUS: (state, action: PayloadAction<Restaurant[]>) => {
            state.resultInRadius = action.payload;
        },
        SET_NEAREST_LIST: (state, action: PayloadAction<Restaurant[]>) => {
            state.nearest = action.payload;
        },
        CHECK_LOCATION_ACCESS_MODAL: (state, action: PayloadAction<boolean>) => {
            state.checkGeolocationModalOn = action.payload;
        },
        SET_CURRENT_LOCATION: (state, action: PayloadAction<KakaoLocation>) => {
            state.currentLocation = action.payload; // 지역버튼에서 사용 중
        },
        CHANGE_REGION_MODAL: (state, action: PayloadAction<boolean>) => {
            state.regionModalOn = action.payload;
        },
        SET_CURRENT_SIDO: (state, action: PayloadAction<string>) => {
            state.currentSido = action.payload;
        },
        SET_CURRENT_SIGUNGU: (state, action: PayloadAction<string>) => {
            state.currentSigungu = action.payload;
        },
        SET_SELECTED_SIDO: (state, action: PayloadAction<string>) => {
            state.selectedSido = action.payload;
        },
        SET_SELECTED_SIGUNGU: (state, action: PayloadAction<string>) => {
            state.selectedSigungu = action.payload;
        },
        SHOW_LIST_IN_REGION_MODAL: (state, action: PayloadAction<boolean>) => {
            state.showListInRegionModalOn = action.payload;
        },
        SET_LIST_IN_PAGE: (state, action: PayloadAction<Restaurant[]>) => {
            state.listInPage = action.payload;
        },
        SET_TOTAL_IN_REGION: (state, action: PayloadAction<number>) => {
            state.totalInRegion = action.payload;
        },
        RESET_LIST_IN_PAGE: (state) => {
            state.listInPage = [];
        },
        RESET_TOTAL_IN_REGION: (state) => {
            state.totalInRegion = 0;
        },
        CATEGORY_FILTER_MODAL: (state, action: PayloadAction<boolean>) => {
            state.categoryFilterModalOn = action.payload;
        },
        ADD_SELECTED_CATEGORY: (state, action: PayloadAction<string[] | '*'>) => {
            state.selectedCategory = action.payload;
        },
        NO_RESULT_MODAL: (state, action: PayloadAction<boolean>) => {
            state.noResultModalOn = action.payload;
        },
    },
});

export const {
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
} = mapSlice.actions;

export default mapSlice.reducer;
