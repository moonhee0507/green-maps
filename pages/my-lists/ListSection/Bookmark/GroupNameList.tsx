import React, { useState } from 'react';
import type { Bookmark } from '../../../../server/models/User';

export { GroupNameList };

function GroupNameList({ groupName, lists }: { groupName: string; lists: Bookmark[] }) {
    const [date] = useState(() => {
        let registeredAt = lists.map((list) => list.registeredAt)[0];

        return registeredAt.slice(0, 13);
    });
    return (
        <li className="li-bookmarkgroup">
            <a href={`/my-lists/bookmark/${groupName}`}>
                <div className="style-wrapper-groupname">
                    <div className="style-wrapper-groupname-info">
                        <div className="container-groupicon">
                            <img src={lists[0].groupIcon} alt="" />
                        </div>
                        <div>
                            <p className="txt-groupname">{groupName}</p>
                            <p className="txt-restaurant-count">
                                개수 <span className="num-restaurant-count">{lists.length}</span>
                            </p>
                        </div>
                    </div>
                    <div className="txt-group-date">{date}</div>
                </div>
            </a>
        </li>
    );
}
