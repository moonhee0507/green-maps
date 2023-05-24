import React, { useEffect, useState } from 'react';
import type { Bookmark } from '../../../../server/models/User';
import type { GroupList } from '../../../../server/models/Bookmark';

export { GroupNameList };

function GroupNameList({ groupInfo, lists }: { groupInfo: GroupList; lists: Bookmark[] }) {
    const { name, registeredAt, groupIcon } = groupInfo;
    const [date] = useState<string>(registeredAt.slice(0, 13));
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (lists.length === 0) setCount(0);
        if (lists.length > 0) {
            const sameName = lists.filter((list) => list.groupName === name);
            setCount(sameName.length);
        }
    }, []);

    return (
        <li className="li-bookmarkgroup">
            <a href={`/my-lists/bookmark/${name}`}>
                <div className="style-wrapper-groupname">
                    <div className="style-wrapper-groupname-info">
                        <div className="container-groupicon">
                            <img src={groupIcon} alt="그룹 아이콘" style={{ width: '100%', height: '100%' }} />
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
            </a>
        </li>
    );
}
