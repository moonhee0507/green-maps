import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../renderer/store/hooks';
import { API_URL } from '../../renderer/CONSTANT_URL';
import { SET_NEAREST_LIST, SET_RESULT_IN_RADIUS } from '../../renderer/_reducers/_slices/mapSlice';
import MapManager from './kakaoApi/MapManager.js';
import addBoundChangeEvent from './kakaoApi/addBoundChangeEvent';
import type { MongoLocation } from './kakaoApi/types';

export { KakaoMap };

function KakaoMap() {
    const dispatch = useAppDispatch();

    const radius = useAppSelector((state) => state.mapSlice.radius);
    const [currentLocation, setCurrentLocation] = useState<MongoLocation | null>(null);

    useEffect(() => {
        kakao.maps.load(async function () {
            const mapManager = MapManager.getMapManager();
            await mapManager.changeCenter();
            mapManager.optimizeMapLevel();

            addBoundChangeEvent();

            const LatLng = mapManager.getCurrentLocation();
            setCurrentLocation([LatLng.getLng(), LatLng.getLat()] as MongoLocation);
        });

        return () => {
            const mapManager = MapManager.getMapManager();
            mapManager.clearCircle();
        };
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
        if (currentLocation) {
            getListInRadius(currentLocation).then((data) => {
                if (data.success) {
                    dispatch(SET_RESULT_IN_RADIUS(data.lists));
                    console.log('반경내', data);
                    const mapManager = MapManager.getMapManager();
                    mapManager.optimizeMapLevel(radius);
                }
            });

            getNearestList(currentLocation).then((data) => {
                if (data.success) {
                    dispatch(SET_NEAREST_LIST(data.lists));
                    console.log('가장가까이', data);
                }
            });
        }
    }, [currentLocation, radius]);

    return <div id="map" />;
}
