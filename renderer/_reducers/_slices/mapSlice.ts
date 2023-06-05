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
};

const initialState: InitialState = {
    COUNT: 0,
    radiusModalOn: false,
    radius: 500,
    resultInRadius: [],
    nearest: [],
    checkGeolocationModalOn: false,
    currentLocation: [37.5666805, 126.9784147],
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
            // 아직 사용 x
            state.currentLocation = action.payload;
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
} = mapSlice.actions;

export default mapSlice.reducer;
