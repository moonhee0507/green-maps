import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../../../server/models/Restaurant';
import { KakaoLocation } from '../../../pages/search/kakaoApi/types';

export type StateToGeolocation = 'prompt' | 'denied' | 'granted';

type InitialState = {
    COUNT: number;
    radiusModalOn: boolean;
    radius: number;
    resultInRadius: Restaurant[];
    nearest: Restaurant[];
    checkGeolocationModalOn: boolean;
    currentLocation: KakaoLocation;
    regionModalOn: boolean;
    currentSido: string;
    selectedSido: string;
    selectedSigungu: string;
    showListInRegionModalOn: boolean;
    listInPage: Restaurant[];
    totalInRegion: number;
};

const initialState: InitialState = {
    COUNT: 0,
    radiusModalOn: false,
    radius: 500,
    resultInRadius: [],
    nearest: [],
    checkGeolocationModalOn: false,
    currentLocation: [37.5666805, 126.9784147],
    regionModalOn: false,
    currentSido: '',
    selectedSido: '',
    selectedSigungu: '',
    showListInRegionModalOn: false,
    listInPage: [],
    totalInRegion: 0,
};

const mapSlice = createSlice({
    name: 'mapSlice',
    initialState: initialState,
    reducers: {
        CHANGED_CENTER: (state, action: any) => {
            state.COUNT = action.COUNT;
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
    },
});

export const {
    CHANGE_RADIUS_MODAL,
    SET_RADIUS,
    SET_RESULT_IN_RADIUS,
    SET_NEAREST_LIST,
    CHECK_LOCATION_ACCESS_MODAL,
    SET_CURRENT_LOCATION,
    CHANGE_REGION_MODAL,
    SET_CURRENT_SIDO,
    SET_SELECTED_SIDO,
    SET_SELECTED_SIGUNGU,
    SHOW_LIST_IN_REGION_MODAL,
    SET_LIST_IN_PAGE,
    SET_TOTAL_IN_REGION,
} = mapSlice.actions;

export default mapSlice.reducer;
