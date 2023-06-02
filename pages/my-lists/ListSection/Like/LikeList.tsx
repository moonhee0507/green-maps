import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../renderer/store/hooks';
import { ListItem } from '../../bookmark/BookmarkListMain/BookmarkList/BookmarkList';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import type { Like } from '../../../../server/models/User';

export function LikeList({ lists }: { lists: Like[] }) {
    const [restaurantData, setRestaurantData] = useState<Like[]>([]);

    const [registerOrder, setRegisterOrder] = useState<Like[]>([]);
    const [nameOrder, setNameOrder] = useState<Like[]>([]);

    useEffect(() => {
        const setData = async () => {
            const arr: Like[] = [];

            for (const list of lists) {
                try {
                    const data = await getRestaurant(list._id);
                    arr.push(Object.assign(list, data));
                } catch (err) {
                    console.error(`북마크 그룹에 저장된 식당 _id에 대한 정보를 가져오는 데 실패했습니다.`);
                }
            }

            setRestaurantData(arr);
        };

        setData();
    }, []);

    const sort = useAppSelector((state) => state.myListSlice.groupNameOrder);

    useEffect(() => {
        if (restaurantData.length !== 0) {
            setRegisterOrder(restaurantData);
            setNameOrder([...restaurantData].sort((a, b) => a.title.localeCompare(b.title, 'en')));
        }
    }, [restaurantData]);

    async function getRestaurant(_id: string) {
        const res = await fetch(`${API_URL}/restaurants/${_id}`);
        const data = await res.json();

        return data;
    }

    return restaurantData && restaurantData.length > 0 ? (
        <ul className="ul-groupname">
            {sort === '등록순'
                ? registerOrder.map((restaurant) => {
                      return <ListItem key={Math.random()} list={restaurant} />;
                  })
                : nameOrder.map((restaurant) => {
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
