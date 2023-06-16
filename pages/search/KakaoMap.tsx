import React, { createElement, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../renderer/store/hooks';
import {
    addBoundChangeEvent,
    checkLoginForInfoWindow,
    clearCircle,
    init,
    optimizeMapLevel,
    setCircle,
} from './kakaoApi/index.js';
import { API_URL } from '../../renderer/CONSTANT_URL';
import { SET_NEAREST_LIST, SET_RESULT_IN_RADIUS } from '../../renderer/_reducers/_slices/mapSlice';
import { MongoLocation } from './kakaoApi/types';
import { render } from 'react-dom';

export { KakaoMap };

function KakaoMap({ isLoggedIn }: { isLoggedIn: boolean }) {
    const dispatch = useAppDispatch();

    const radius = useAppSelector((state) => state.mapSlice.radius);
    const [isInitialized, setIsInitialized] = useState(false);
    const [currentLocation, setCurrentLocation] = useState<MongoLocation | null>(null);

    const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);

    useEffect(() => {
        init().then((locPosition: kakao.maps.LatLng) => {
            setIsInitialized(true);
            setCurrentLocation([locPosition.getLng(), locPosition.getLat()] as MongoLocation);
            checkLoginForInfoWindow(isLoggedIn);
        });
    }, []);

    const getListInRadius = useCallback(
        async (currentLocation: MongoLocation) => {
            if (Array.isArray(currentLocation)) {
                const res = await fetch(`${API_URL}/map/within-radius-of?radius=${radius}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ currentLocation: currentLocation, category: selectedCategory }),
                });

                const data = await res.json();

                return data;
            }
        },
        [radius, selectedCategory, currentLocation]
    );

    // 반경 내 식당이 없을 경우 보여주는 데이터
    const getNearestList = useCallback(
        async (currentLocation: MongoLocation) => {
            if (Array.isArray(currentLocation)) {
                const count = 5;

                const res = await fetch(`${API_URL}/map/nearest?top=${count}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ currentLocation: currentLocation }),
                });

                const data = await res.json();

                return data;
            }
        },
        [radius, currentLocation]
    );

    useEffect(() => {
        if (isInitialized) {
            addBoundChangeEvent();
            clearCircle();
            setCircle(radius);

            // 모달에서 사용하는 geocoder api 때문에 동적으로 생성
            const modalGroup = document.querySelector('.modal-group');
            import('./ModalGroup/ChangeRegionModal/ChangeRegionModal').then((module) => {
                const ChangeRegionModal = module.default;
                const modalElement = createElement(ChangeRegionModal);
                render(modalElement, modalGroup);
            });

            if (currentLocation) {
                getListInRadius(currentLocation).then((data) => {
                    if (data.success) {
                        dispatch(SET_RESULT_IN_RADIUS(data.lists));
                        optimizeMapLevel(radius);
                    }
                });

                getNearestList(currentLocation).then((data) => {
                    if (data.success) {
                        dispatch(SET_NEAREST_LIST(data.lists));
                    }
                });
            }
        }
    }, [radius, isInitialized, selectedCategory, currentLocation]);

    return <div id="map" />;
}
