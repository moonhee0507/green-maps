import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../../components/topBar/topBar';
import { Notice } from './Notice/Notice';
import { GroupNameList } from './GroupNameList/GroupNameList';
import { NavBar } from '../../../../components/navBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import type { PageContext } from '../../../../renderer/types';
import type { UserInfo } from '../../../../server/models/User';
import type { GroupList } from '../../../../server/models/Bookmark';

export { Page };

function Page(pageContext: PageContext) {
    const { isLoggedIn, info } = pageContext.user;
    const [groupList, setGroupList] = useState<GroupList[] | null>(null);

    useEffect(() => {
        try {
            (async () => {
                const res = await fetch(`${API_URL}/bookmark/${info?.userId}`);
                const data = await res.json();

                setGroupList(data.groupList);
            })();
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <>
            <TopBar title="그룹 목록 편집" />
            <GroupListMain userInfo={info} groupList={groupList} />
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup userInfo={info} groupList={groupList} />
        </>
    );
}

function GroupListMain({ userInfo, groupList }: { userInfo: UserInfo | null; groupList: GroupList[] | null }) {
    const { bookmarkList } = userInfo as UserInfo;

    return (
        <main className="main-group-list">
            <section>
                <h3 className="sr-only">내 북마크 그룹 목록</h3>
                <Notice />
                <GroupNameList userInfo={userInfo} bookmarkList={bookmarkList} groupList={groupList} />
            </section>
        </main>
    );
}
