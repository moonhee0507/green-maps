import React from 'react';
import type { Bookmark } from '../../../../server/models/User';

export { GroupNameList };

function GroupNameList({ groupName, lists }: { groupName: string; lists: Bookmark[] }) {
    console.log(lists);
    return (
        <li className="li-bookmarkgroup">
            <a href={`/my-lists/bookmark/${groupName}`}>
                <div className="style-wrapper-bookmarkgroup">
                    <div className="container-groupicon">
                        {/**
                         * 같은 그룹인 리스트만 가져오므로 0번째 리스트의 groupIcon 사용
                         */}
                        <img src={lists[0].groupIcon} alt="" />
                    </div>
                    <div className="container-bookmarkgroup-right">
                        <p className="txt-groupname">{groupName}</p>
                        <p className="txt-restaurant-count">
                            개수 <span className="num-restaurant-count">{lists.length}</span>
                        </p>
                    </div>
                </div>
            </a>
        </li>
    );
}
