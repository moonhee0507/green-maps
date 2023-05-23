import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../../API_URL/api';
import type { Bookmark, Like } from '../../../../../server/models/User';
import type { Restaurant } from '../../../../../server/models/Restaurant';
import formatDistance from './formatDistance';

export { BookmarkList };

function BookmarkList({ lists }: { lists: Bookmark[] }) {
    return lists && lists.length > 0 ? (
        <ul className="ul-groupname">
            {lists.map((list) => {
                return <ListItem key={Math.random()} list={list} />;
            })}
        </ul>
    ) : (
        <div className="style-wrapper-no-review">
            <div className="txt-no-review">😭</div>
            <p>목록이 없어요.</p>
        </div>
    );
}

export function ListItem({ list }: { list: Bookmark | Like }) {
    const { _id } = list;
    const [restaurantInfo, setRestaurantInfo] = useState<Restaurant | null>(null);

    useEffect(() => {
        getRestaurant().then((data) => {
            setRestaurantInfo(data);
        });
    }, []);

    async function getRestaurant() {
        const res = await fetch(`${API_URL}/restaurants/${_id}`);
        const data = await res.json();

        return data;
    }

    return (
        <li className="list-restaurant-inbookmark">
            <a href={`/search/${_id}`}>
                <div className="style-wrapper-restaurantinfo-inbookmark">
                    <div className="container-restaurant-title-detail">
                        <p>{restaurantInfo?.title}</p>
                        <div>
                            <Distance location={restaurantInfo?.location.coordinates || [0, 0]} />
                            <span className="txt-address">{restaurantInfo?.address}</span>
                        </div>
                    </div>
                    <button type="button" aria-label="더보기 버튼" className="button-more" />
                </div>
            </a>
        </li>
    );
}

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
