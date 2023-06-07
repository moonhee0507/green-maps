import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import {
    CATEGORY_FILTER_MODAL,
    CHANGE_RADIUS_MODAL,
    CHANGE_REGION_MODAL,
    SET_MAP_MODE,
    SHOW_LIST_IN_REGION_MODAL,
} from '../../../renderer/_reducers/_slices/mapSlice';
import appModalMode from '../../../components/modal/appModalMode';
import { moveToCurrentLocation } from '../kakaoApi';

export { ControlButton };

function ControlButton() {
    return (
        <div className="wrapper-map-control-button">
            <SelectRegion />
            <ChangeRadius />
            <CategoryFilter />
            <BackCurrentLocation />
        </div>
    );
}

function BackCurrentLocation() {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        moveToCurrentLocation();
        // 지역탐색 결과 모달 끄기
        dispatch(SHOW_LIST_IN_REGION_MODAL(false));
    };
    return (
        <button type="button" onClick={handleClick}>
            내 위치로
        </button>
    );
}

function CategoryFilter() {
    const dispatch = useAppDispatch();

    const showListInRegionModalOn = useAppSelector((state) => state.mapSlice.showListInRegionModalOn);

    const handleClick = () => {
        dispatch(CATEGORY_FILTER_MODAL(true));

        // 지역검색결과 모달이 켜져 있으면 끄기
        if (showListInRegionModalOn === true) {
            dispatch(SHOW_LIST_IN_REGION_MODAL(false));
        }
    };

    return (
        <button type="button" onClick={handleClick}>
            업종 필터
        </button>
    );
}

function SelectRegion() {
    const dispatch = useAppDispatch();

    const mapMode = useAppSelector((state) => state.mapSlice.mapMode);

    function handleClick() {
        appModalMode(true);
        dispatch(CHANGE_REGION_MODAL(true));

        // 지역버튼 클릭 시 지역리스트 결과모달 켜져 있을 때는 끄기
        dispatch(SHOW_LIST_IN_REGION_MODAL(false));
        dispatch(SET_MAP_MODE('지역탐색 모드'));
    }
    return (
        <button onClick={handleClick} className={`button-map-mode ${mapMode === '지역탐색 모드' ? 'on' : ''}`}>
            지역 탐색 모드
        </button>
    );
}

function ChangeRadius() {
    const dispatch = useAppDispatch();

    const mapMode = useAppSelector((state) => state.mapSlice.mapMode);

    const radius = useAppSelector((state) => state.mapSlice.radius);
    const [calcRadius, setCalcRadius] = useState(radius);
    const [unit, setUnit] = useState('m');

    useEffect(() => {
        if (radius < 1000) {
            setCalcRadius(radius);
            setUnit('m');
        } else {
            setCalcRadius(radius / 1000);
            setUnit('km');
        }
    }, [radius]);

    const handleClick = () => {
        appModalMode(true);
        dispatch(CHANGE_RADIUS_MODAL(true));
        dispatch(SET_MAP_MODE('반경탐색 모드'));
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`button-map-mode ${mapMode === '반경탐색 모드' ? 'on' : ''}`}
        >
            <span>반경</span>
            <span>{calcRadius}</span>
            <span>{unit}</span>
            <span> 탐색 모드</span>
        </button>
    );
}
