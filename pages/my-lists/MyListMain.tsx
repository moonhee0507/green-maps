import React from 'react';
import { Menu } from './Menu/Menu';
import { ListSection } from './ListSection/ListSection';
import type { UserInfo } from '../../server/models/User';
import type { GroupList } from '../../server/models/Bookmark';

export default function MyListMain({
    userInfo,
    groupList,
}: {
    userInfo: UserInfo | null;
    groupList: GroupList[] | null;
}) {
    return (
        <main className="main-bookmark">
            <Menu userInfo={userInfo} />
            <ListSection userInfo={userInfo} groupList={groupList} />
        </main>
    );
}
