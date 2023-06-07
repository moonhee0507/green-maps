import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../renderer/store/hooks';
import { clearCircle, init, optimizeMapLevel, setCircle } from './kakaoApi/index.js';
import { API_URL } from '../../renderer/CONSTANT_URL';
import { SET_NEAREST_LIST, SET_RESULT_IN_RADIUS } from '../../renderer/_reducers/_slices/mapSlice';
import { MongoLocation } from './kakaoApi/types';

export { KakaoMap };

function KakaoMap() {
    const dispatch = useAppDispatch();

    const radius = useAppSelector((state) => state.mapSlice.radius);
    const [isInitialized, setIsInitialized] = useState(false);
    const [currentLocation, setCurrentLocation] = useState<MongoLocation | null>(null);

    const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);

    useEffect(() => {
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
                    'Content-Type': 'application/json',
                },
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
                    'Content-Type': 'application/json',
                },
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
                        console.log('반경내', data);
                        optimizeMapLevel(radius);
                    }
                });

                getNearestList(currentLocation).then((data) => {
                    if (data.success) {
                        dispatch(SET_NEAREST_LIST(data.lists));
                        console.log('가장가까이', data);
                    }
                });
            }
        }
    }, [radius, isInitialized, selectedCategory]);

    return <div id="map" />;
}
