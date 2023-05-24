import React, { useEffect, useState } from 'react';
import { GroupInfo } from './GroupInfo';
import { ButtonGroup } from './ButtonGroup';
import type { Bookmark } from '../../../../../server/models/User';
import type { GroupList } from '../../../../../server/models/Bookmark';

export { GroupNameList };

function GroupNameList({ bookmarkList, groupList }: { bookmarkList: Bookmark[]; groupList: GroupList[] | null }) {
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
                    return <GroupNameListItem key={Math.random()} groupInfo={groupInfo} bookmarkList={bookmarkList} />;
                })}
        </ul>
    );
}

function GroupNameListItem({ groupInfo, bookmarkList }: { groupInfo: GroupList; bookmarkList: Bookmark[] }) {
    const { name } = groupInfo;

    return (
        <li className="li-bookmarkgroup reuse">
            <div className="style-wrapper-groupname">
                <GroupInfo groupInfo={groupInfo} bookmarkList={bookmarkList} />
                {name !== '기본 그룹' && <ButtonGroup groupName={name} />}
            </div>
        </li>
    );
}
