import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../renderer/store/hooks';
import { checkLoginForInfoWindow, clearCircle, init, optimizeMapLevel, setCircle } from './kakaoApi/index.js';
import { API_URL } from '../../renderer/CONSTANT_URL';
import { SET_NEAREST_LIST, SET_RESULT_IN_RADIUS } from '../../renderer/_reducers/_slices/mapSlice';
import { MongoLocation } from './kakaoApi/types';

export { KakaoMap };

function KakaoMap({ isLoggedIn }: { isLoggedIn: boolean }) {
    const dispatch = useAppDispatch();

    const radius = useAppSelector((state) => state.mapSlice.radius);
    const [isInitialized, setIsInitialized] = useState(false);
    const [currentLocation, setCurrentLocation] = useState<MongoLocation | null>(null);

    const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);

    useEffect(() => {
        checkLoginForInfoWindow(isLoggedIn);

        init().then((locPosition: kakao.maps.LatLng) => {
            setIsInitialized(true);
            setCurrentLocation([locPosition.getLng(), locPosition.getLat()] as MongoLocation);
        });
    }, []);

    const getListInRadius = useCallback(
        async (currentLocation: MongoLocation) => {
            const res = await fetch(`${API_URL}/map/within-radius-of?radius=${radius}`, {
                method: 'POST',
                headers: {
                    'Access-Control-Request-Method': 'POST',
                    'Access-Control-Request-Headers': 'Content-Type',
                    'Content-Type': 'application/json',
                },
                mode: 'no-cors',
                body: JSON.stringify({ currentLocation: currentLocation, category: selectedCategory }),
            });

            const data = await res.json();

            return data;
        },
        [radius, selectedCategory]
    );

    // 반경 내 식당이 없을 경우 보여주는 데이터
    const getNearestList = useCallback(
        async (currentLocation: MongoLocation) => {
            const count = 5;

            const res = await fetch(`${API_URL}/map/nearest?top=${count}`, {
                method: 'POST',
                headers: {
                    'Access-Control-Request-Method': 'POST',
                    'Access-Control-Request-Headers': 'Content-Type',
                    'Content-Type': 'application/json',
                },
                mode: 'no-cors',
                body: JSON.stringify({ currentLocation: currentLocation }),
            });

            const data = await res.json();

            return data;
        },
        [radius]
    );

    useEffect(() => {
        if (isInitialized) {
            clearCircle();
            setCircle(radius);

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
    }, [radius, isInitialized, selectedCategory]);

    return <div id="map" />;
}
