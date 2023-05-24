import React, { useEffect, useState } from 'react';
import { GroupInfo } from './GroupInfo';
import { ButtonGroup } from './ButtonGroup';
import type { Bookmark, UserInfo } from '../../../../../server/models/User';
import type { GroupList } from '../../../../../server/models/Bookmark';

export { GroupNameList };

function GroupNameList({
    userInfo,
    bookmarkList,
    groupList,
}: {
    userInfo: UserInfo | null;
    bookmarkList: Bookmark[];
    groupList: GroupList[] | null;
}) {
    const [arrGroupName, setArrGroupName] = useState<GroupList[] | null>(null);

    useEffect(() => {
        if (groupList !== null) {
            setArrGroupName(groupList);
        }
    }, [groupList]);

    return (
        <ul>
            {arrGroupName !== null &&
                arrGroupName.map((groupInfo) => {
                    return (
                        <GroupNameListItem
                            key={Math.random()}
                            userInfo={userInfo}
                            groupInfo={groupInfo}
                            bookmarkList={bookmarkList}
                        />
                    );
                })}
        </ul>
    );
}

function GroupNameListItem({
    userInfo,
    groupInfo,
    bookmarkList,
}: {
    userInfo: UserInfo | null;
    groupInfo: GroupList;
    bookmarkList: Bookmark[];
}) {
    return (
        <li className="li-bookmarkgroup reuse">
            <div className="style-wrapper-groupname">
                <GroupInfo groupInfo={groupInfo} bookmarkList={bookmarkList} />
                {groupInfo.name !== '기본 그룹' && <ButtonGroup userInfo={userInfo} groupInfo={groupInfo} />}
            </div>
        </li>
    );
}
