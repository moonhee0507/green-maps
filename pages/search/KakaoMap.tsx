import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../renderer/store/hooks';
import { clearCircle, init, optimizeMapLevel, setCircle } from './kakaoMapAPI';
import { API_URL } from '../../renderer/CONSTANT_URL';
import { SET_RESULT_IN_RADIUS } from '../../renderer/_reducers/_slices/mapSlice';

export { KakaoMap };

type Longitude = number;
type Latitude = number;

type Location = [Longitude, Latitude];

function KakaoMap() {
    const dispatch = useAppDispatch();

    const radius = useAppSelector((state) => state.mapSlice.radius);
    const [isInitialized, setIsInitialized] = useState(false);
    const [currentLocation, setCurrentLocation] = useState<Location | null | any>(null);

    useEffect(() => {
        init().then((locPosition: any) => {
            setIsInitialized(true);
            setCurrentLocation([locPosition.getLng(), locPosition.getLat()]);
        });
    }, []);

    const getListInRadius = useCallback(
        async (currentLocation: [number, number]) => {
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

    useEffect(() => {
        if (isInitialized) {
            clearCircle();
            setCircle(radius);

            if (currentLocation) {
                getListInRadius(currentLocation).then((data) => {
                    if (data) {
                        dispatch(SET_RESULT_IN_RADIUS(data));
                        console.log(data);
                        optimizeMapLevel(radius);
                    }
                });
            }
        }
    }, [radius, isInitialized]);

    return <div id="map" />;
}
