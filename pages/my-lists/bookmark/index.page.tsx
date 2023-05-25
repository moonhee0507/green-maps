import React from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { BookmarkListMain } from './BookmarkListMain/BookmarkListMain';
import { NavBar } from '../../../components/navBar';
import type { PageContext } from '../../../renderer/types';
import { ModalGroup } from '../ModalGroup/ModalGroup';

export { Page };

function Page(pageContext: PageContext) {
    const { routeParams, user } = pageContext;
    const { isLoggedIn, info } = user;

    // 내 북마크한 식당 중에서 groupName을 비교, routeParams와 일치하는 북마크만 lists로 내려보냄
    const listHasGroupName = info?.bookmarkList.filter((list) => list.groupName === routeParams?.bookmarkGroupName);

    return (
        <>
            <TopBar title={routeParams?.bookmarkGroupName || ''} />
            <BookmarkListMain
                info={info}
                groupName={routeParams?.bookmarkGroupName || ''}
                lists={listHasGroupName || []}
            />
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup userInfo={info} />
        </>
    );
}
