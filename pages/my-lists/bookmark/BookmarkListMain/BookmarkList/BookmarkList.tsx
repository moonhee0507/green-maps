import React, { useEffect, useState } from 'react';
import { Distance } from './Distance';
import { MoreButton } from '../../../../../components/button/MoreButton';
import { API_URL } from '../../../../../renderer/CONSTANT_URL';
import { useAppSelector } from '../../../../../renderer/store/hooks';
import type { Bookmark, Like } from '../../../../../server/models/User';
import type { Restaurant } from '../../../../../server/models/Restaurant';
import { AssignedLike } from '../../../ListSection/Like/LikeList';

type AssignedBookmark = Bookmark & {
    restaurantInfo: Restaurant;
};

export function BookmarkList({ lists }: { lists: Bookmark[] }) {
    const [restaurantData, setRestaurantData] = useState<AssignedBookmark[]>([]);

    const [registerOrder, setRegisterOrder] = useState<AssignedBookmark[]>([]);
    const [nameOrder, setNameOrder] = useState<AssignedBookmark[]>([]);

    useEffect(() => {
        const setData = async () => {
            const arr: AssignedBookmark[] = [];

            for (const list of lists) {
                try {
                    if (typeof list._id === 'string') {
                        const data = await getRestaurant(list._id);
                        arr.push(Object.assign(list, data));
                    }
                } catch (err) {
                    console.error(`북마크 그룹에 저장된 식당 _id에 대한 정보를 가져오는 데 실패했습니다.`);
                }
            }

            setRestaurantData(arr);
        };

        setData();
    }, [lists]);

    const sort = useAppSelector((state) => state.myListSlice.groupNameOrder);

    useEffect(() => {
        if (restaurantData.length !== 0) {
            setRegisterOrder(restaurantData);
            setNameOrder(
                [...restaurantData].sort((a, b) => a.restaurantInfo.title.localeCompare(b.restaurantInfo.title, 'en'))
            );
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

export function ListItem({ list }: { list: AssignedBookmark | AssignedLike }) {
    const { _id, title, location, address } = list.restaurantInfo;
    return (
        <li className="list-restaurant-inbookmark">
            <a href={`/search/${_id}`}>
                <div className="container-restaurant-title-detail">
                    <div className="style-container-title-date">
                        <p className="txt-title">{title}</p>
                        <span className="txt-date">{list.registeredAt.slice(0, 13)}</span>
                    </div>
                    <div>
                        <Distance location={location.coordinates || [0, 0]} />
                        <span className="txt-address">{address}</span>
                    </div>
                </div>
            </a>
            <MoreButton restaurantId={_id} restaurantTitle={title} />
        </li>
    );
}
