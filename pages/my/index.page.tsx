import React from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { NavBar } from '../../components/navBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { useCheckLoginStatus } from '../../renderer/_hooks/useCheckLoginStatus';
import LoadingMain from '../../components/Loading/LoadingMain';
import type { PageContext } from '../../renderer/types';

export const documentProps = {
    title: '내 정보 | Green Maps',
    description: '채식 식당 지도 서비스 마이 페이지',
};

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
