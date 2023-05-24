import React, { useEffect, useState } from 'react';
import { GroupList } from '../../../../../server/models/Bookmark';
import { Bookmark } from '../../../../../server/models/User';

export { GroupInfo };

function GroupInfo({ groupInfo, bookmarkList }: { groupInfo: GroupList; bookmarkList: Bookmark[] }) {
    const { groupIcon, name } = groupInfo;
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (bookmarkList.length === 0) setCount(0);
        if (bookmarkList.length > 0) {
            const sameName = bookmarkList.filter((list) => list.groupName === name);
            setCount(sameName.length);
        }
    }, []);

    return (
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
    );
}
