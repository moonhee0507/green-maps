import React, { useEffect, useState } from 'react';
import { ListItem } from '../../bookmark/BookmarkListMain/BookmarkList/BookmarkList';
import { API_URL } from '../../../API_URL/api';
import type { Bookmark, Like } from '../../../../server/models/User';
import type { Restaurant } from '../../../../server/models/Restaurant';

type RestaurantData = (Bookmark & Restaurant) | (Like & Restaurant);

export function LikeList({ lists }: { lists: Like[] }) {
    const [restaurantData, setRestaurantData] = useState<RestaurantData[]>([]);

    useEffect(() => {
        const setData = async () => {
            const arr: RestaurantData[] = [];

            for (const list of lists) {
                try {
                    const data = await getRestaurant(list._id);
                    arr.push(Object.assign(list, data));
                } catch (err) {
                    console.error(`좋아요 데이터에 저장된 식당 _id에 대한 정보를 가져오는 데 실패했습니다.`);
                }
            }

            setRestaurantData(arr);
        };

        setData();
    }, []);

    async function getRestaurant(_id: string) {
        const res = await fetch(`${API_URL}/restaurants/${_id}`);
        const data = await res.json();

        return data;
    }

    return restaurantData && restaurantData.length > 0 ? (
        <ul>
            {restaurantData.map((restaurant) => {
                return <ListItem key={Math.random()} list={restaurant} />;
            })}
        </ul>
    ) : (
        <div className="style-wrapper-no-review">
            <div className="txt-no-review">😭</div>
            <p>목록이 없어요.</p>
        </div>
    );
}
