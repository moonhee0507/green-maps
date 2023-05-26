import React, { useEffect, useState } from 'react';
import { Bookmark, UserInfo } from '../../../../server/models/User';
import { GroupList } from '../../../../server/models/Bookmark';
import { useAppSelector } from '../../../../renderer/store/hooks';
import { API_URL } from '../../../API_URL/api';

export { GroupNameList };

function GroupNameList({
    userInfo,
    groupInfo,
    lists,
}: {
    userInfo: UserInfo | null;
    groupInfo: GroupList;
    lists: Bookmark[];
}) {
    const { name, registeredAt, groupIcon } = groupInfo;
    const [date] = useState<string>(registeredAt.slice(0, 13));
    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<UserInfo | null>(null);

    useEffect(() => {
        if (lists.length === 0) setCount(0);
        if (lists.length > 0) {
            const sameName = lists.filter((list) => list.groupName === name);
            setCount(sameName.length);
        }

        if (userInfo !== null) {
            setUser(userInfo);
        }
    }, []);

    const restaurantToMove = useAppSelector((state) => state.myListSlice.restaurantToMove);

    function handleCopy() {
        if (user !== null) {
            submit(user.userId, name, restaurantToMove);
        }
    }

    async function submit(userId: string, newGroupName: string, selectedRestaurant: string[]) {
        const res = await fetch(`${API_URL}/users/update/bookmark`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                newGroupName: newGroupName,
                selectedRestaurant: selectedRestaurant,
            }),
        });

        const data = await res.json();

        if (data.success) {
            alert('복사가 완료되었습니다.\n복사가 완료된 원본은 삭제됩니다.');
            window.location.href = '/my-lists';
        } else {
            console.error(data);
        }
    }

    return (
        <li className="li-bookmarkgroup copy">
            <button onClick={handleCopy}>
                <div className="style-wrapper-groupname">
                    <div className="style-wrapper-groupname-info">
                        <div className="container-groupicon">
                            <img src={groupIcon} alt="그룹 아이콘" />
                        </div>
                        <div>
                            <p className="txt-groupname">{name}</p>
                            <p className="txt-restaurant-count">
                                개수 <span className="num-restaurant-count">{count}</span>
                            </p>
                        </div>
                    </div>
                    <div className="txt-group-date">{date}</div>
                </div>
            </button>
        </li>
    );
}
