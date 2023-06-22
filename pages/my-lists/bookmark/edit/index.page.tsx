import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../../components/topBar/topBar';
import { Notice } from './Notice/Notice';
import { GroupNameList } from './GroupNameList/GroupNameList';
import { NavBar } from '../../../../components/navBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import { useCheckLoginStatus } from '../../../../renderer/_hooks/useCheckLoginStatus';
import type { Bookmark, UserInfo } from '../../../../server/models/User';
import type { GroupList } from '../../../../server/models/Bookmark';

export const documentProps = {
    title: '북마크 그룹 목록 편집 | Green Maps',
    description: '북마크 그룹 목록 편집 페이지',
};
export { Page };

function Page() {
    const [isLoggedIn, info] = useCheckLoginStatus();
    const [groupList, setGroupList] = useState<GroupList[] | null>(null);

    useEffect(() => {
        try {
            if (info) {
                (async () => {
                    const res = await fetch(`${API_URL}/bookmark/${info.userId}`);
                    const data = await res.json();

                    setGroupList(data.groupList);
                })();
            }
        } catch (err) {
            console.error(err);
        }
    }, [info]);

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
    const [bookmarkList, setBookmarkList] = useState<Bookmark[] | null>(null);

    useEffect(() => {
        if (userInfo !== null) {
            setBookmarkList(userInfo.bookmarkList);
        } else {
            setBookmarkList(null);
        }
    }, [userInfo]);

    return (
        <main className="main-group-list">
            <section>
                <h3 className="sr-only">내 북마크 그룹 목록</h3>
                <Notice />
                {bookmarkList && groupList && (
                    <GroupNameList userInfo={userInfo} bookmarkList={bookmarkList} groupList={groupList} />
                )}
            </section>
        </main>
    );
}
