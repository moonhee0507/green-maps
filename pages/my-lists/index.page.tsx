import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { NavBar } from '../../components/navBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { Menu } from './Menu/Menu';
import { ListSection } from './ListSection/ListSection';
import { API_URL } from '../../renderer/CONSTANT_URL';
import type { PageContext } from '../../renderer/types';
import type { GroupList } from '../../server/models/Bookmark';
import type { UserInfo } from '../../server/models/User';

export { Page };

function Page(pageContext: PageContext) {
    const { isLoggedIn, info } = pageContext.user;
    const [groupList, setGroupList] = useState<GroupList[] | null>(null);

    useEffect(() => {
        if (info) {
            try {
                (async () => {
                    const res = await fetch(`${API_URL}/bookmark/${info?.userId}`);
                    const data = await res.json();

                    setGroupList(data.groupList);
                })();
            } catch (err) {
                console.error(err);
            }
        }
    }, [info]);

    return (
        <>
            <TopBar title="내 식당 목록" />
            <MyListMain userInfo={info} groupList={groupList} />
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup userInfo={info} />
        </>
    );
}

function MyListMain({ userInfo, groupList }: { userInfo: UserInfo | null; groupList: GroupList[] | null }) {
    return (
        <main className="main-bookmark">
            <Menu userInfo={userInfo} />
            <ListSection userInfo={userInfo} groupList={groupList} />
        </main>
    );
}
