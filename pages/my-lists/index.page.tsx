import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { NavBar } from '../../components/navBar';
import { Menu } from './Menu/Menu';
import { ListSection } from './ListSection/ListSection';
import type { PageContext } from '../../renderer/types';
import type { UserInfo } from '../../server/models/User';
import { ModalGroup } from './ModalGroup/ModalGroup';

export { Page };

function Page(pageContext: PageContext) {
    const { isLoggedIn, info } = pageContext.user;

    return (
        <>
            <TopBar title="내 식당 목록" />
            <MyListMain userInfo={info} />
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup />
        </>
    );
}

function MyListMain({ userInfo }: { userInfo: UserInfo | null }) {
    return (
        <main className="main-bookmark">
            <Menu userInfo={userInfo} />
            <ListSection userInfo={userInfo} />
        </main>
    );
}
