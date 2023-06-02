import React, { useEffect, useState } from 'react';
import formatDistance from './formatDistance';
import { API_URL } from '../../../../CONSTANT_URL';

export { Distance };

function Distance({ location }: { location: number[] }) {
    const [currentLocation, setCurrentLocation] = useState<number[] | null>(null);
    const [distance, setDistance] = useState<number>(0);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                setCurrentLocation([lng, lat]);
            });
        }
    }, []);

    // 현재 위치가 결정되면 거리 구하기
    useEffect(() => {
        if (currentLocation !== null && location.every((v) => v !== 0)) {
            getDistance().then((result) => {
                setDistance(result.distance);
            });
        }
        async function getDistance() {
            const res = await fetch(`${API_URL}/map/distance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ currentLocation: currentLocation, targetLocation: location }),
            });

            const data = await res.json();

            return data;
        }
    }, [currentLocation, location]);

    return <span className="txt-distance">{formatDistance(distance)}</span>;
}
