import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../renderer/store/hooks';
import { clearCircle, init, optimizeMapLevel, setCircle } from './kakaoApi/index.js';
import { API_URL } from '../../renderer/CONSTANT_URL';
import { SET_NEAREST_LIST, SET_RESULT_IN_RADIUS } from '../../renderer/_reducers/_slices/mapSlice';
import { MongoLocation, Location, LocPosition } from './kakaoApi/types';

export { KakaoMap };

function KakaoMap() {
    const dispatch = useAppDispatch();

    const radius = useAppSelector((state) => state.mapSlice.radius);
    const [isInitialized, setIsInitialized] = useState(false);
    const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

    useEffect(() => {
        init().then((locPosition: LocPosition) => {
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
                body: JSON.stringify({ currentLocation: currentLocation }),
            });

            const data = await res.json();

            return data;
        },
        [radius]
    );

    const getNearestList = useCallback(
        async (currentLocation: MongoLocation) => {
            const count = 3;

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
    }, [radius, isInitialized]);

    return <div id="map" />;
}
