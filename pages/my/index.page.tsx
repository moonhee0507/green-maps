import React from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { NavBar } from '../../components/navBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { useCheckLoginStatus } from '../../renderer/_hooks/useCheckLoginStatus';
import LoadingMain from '../../components/Loading/LoadingMain';
import type { PageContext } from '../../renderer/types';

const MyMain = React.lazy(() => import('./MyMain'));

export function Page(pageContext: PageContext) {
    const [isLoggedIn, info] = useCheckLoginStatus();

    const { reviews } = pageContext;

    return isLoggedIn && info ? (
        <>
            <TopBar title="내 정보" />
            <React.Suspense fallback={<LoadingMain />}>
                <MyMain userInfo={info} reviews={reviews} />
            </React.Suspense>
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup />
        </>
    ) : (
        <LoadingMain />
    );
}
