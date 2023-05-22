import React from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { BookmarkListMain } from './BookmarkListMain/BookmarkListMain';
import { NavBar } from '../../../components/navBar';
import type { PageContext } from '../../../renderer/types';

export { Page };

function Page(pageContext: PageContext) {
    const { routeParams, user } = pageContext;
    const { isLoggedIn, info } = user;

    const listHasGroupName = info?.bookmarkList.filter((list) => list.groupName === routeParams?.bookmarkGroupName);

    return (
        <>
            <TopBar title={routeParams?.bookmarkGroupName || ''} />
            <BookmarkListMain info={info} lists={listHasGroupName || []} />
            <NavBar isLoggedIn={isLoggedIn} />
        </>
    );
}
