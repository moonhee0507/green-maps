import React from 'react';
import type { Bookmark } from '../../../../server/models/User';

export { GroupNameList };

function GroupNameList({ groupName, lists }: { groupName: string; lists: Bookmark[] }) {
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
                    <div className="txt-group-date">2023.05.23.</div>
                </div>
            </a>
        </li>
    );
}
