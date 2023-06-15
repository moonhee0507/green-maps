import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../components/topBar/topBar';
// import { BookmarkListMain } from './BookmarkListMain/BookmarkListMain';
import { NavBar } from '../../../components/navBar';
import { ModalGroup } from '../ModalGroup/ModalGroup';
import { useCheckLoginStatus } from '../../../renderer/_hooks/useCheckLoginStatus';
import type { PageContext } from '../../../renderer/types';
import { Bookmark } from '../../../server/models/User';
import LoadingMain from '../../../components/Loading/LoadingMain';

const BookmarkListMain = React.lazy(() => import('./BookmarkListMain/BookmarkListMain'));

export function Page(pageContext: PageContext) {
    const { routeParams } = pageContext;
    const [isLoggedIn, info] = useCheckLoginStatus();

    // const listHasGroupName = info?.bookmarkList.filter((list) => list.groupName === routeParams?.bookmarkGroupName);
    const [listHasGroupName, setListHasGroupName] = useState<Bookmark[]>([]);

    useEffect(() => {
        if (info !== null) {
            setListHasGroupName(info.bookmarkList.filter((list) => list.groupName === routeParams?.bookmarkGroupName));
        }
    }, [info]);

    return isLoggedIn ? (
        <>
            <TopBar title={routeParams?.bookmarkGroupName || ''} />
            <React.Suspense fallback={<LoadingMain />}>
                <BookmarkListMain
                    info={info}
                    groupName={routeParams?.bookmarkGroupName || ''}
                    lists={listHasGroupName}
                />
            </React.Suspense>
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup userInfo={info} />
        </>
    ) : (
        <LoadingMain />
    );
}
