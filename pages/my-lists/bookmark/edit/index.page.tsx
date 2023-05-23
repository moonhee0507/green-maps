import React from 'react';
import { TopBar } from '../../../../components/topBar/topBar';
import { Notice } from './Notice/Notice';
import { GroupList } from './GroupList/GroupList';
import { NavBar } from '../../../../components/navBar';
import type { PageContext } from '../../../../renderer/types';
import type { UserInfo } from '../../../../server/models/User';

export { Page };

function Page(pageContext: PageContext) {
    const { isLoggedIn, info } = pageContext.user;

    return (
        <>
            <TopBar title="그룹 목록 편집" />
            <GroupListMain userInfo={info} />
            <NavBar isLoggedIn={isLoggedIn} />
        </>
    );
}

function GroupListMain({ userInfo }: { userInfo: UserInfo | null }) {
    const { bookmarkList } = userInfo as UserInfo;

    return (
        <main className="main-group-list">
            <section>
                <h3 className="sr-only">내 북마크 그룹 목록</h3>
                <Notice />
                <GroupList lists={bookmarkList} />
            </section>
        </main>
    );
}
