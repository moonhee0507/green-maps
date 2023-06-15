import React, { MouseEvent, useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { NavBar } from '../../components/navBar';
import { ProfileSection } from './ProfileSection';
import { MyReviewSection } from './MyReviewSection/MyReviewSection';
import { MyCommunitySection } from './MyCommunitySection/MyCommunitySection';
import { ModalGroup } from './ModalGroup/ModalGroup';
import type { PageContext } from '../../renderer/types';
import type { UserInfo } from '../../server/models/User';
import type { Review } from '../../server/models/Review';
import { useCheckLoginStatus } from '../../renderer/_hooks/useCheckLoginStatus';
import gifSpinner from '/images/spinner.gif';

const MyMain = React.lazy(() => import('./MyMain'));

export function Page(pageContext: PageContext) {
    const [isLoggedIn, info] = useCheckLoginStatus();

    const { reviews } = pageContext;

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         alert('로그인 페이지로 이동합니다.');
    //         window.location.href = '/login';
    //     }
    // }, []);

    return isLoggedIn && info ? (
        <>
            <TopBar title="내 정보" />
            <React.Suspense fallback={<Loading />}>
                <MyMain userInfo={info} reviews={reviews} />
            </React.Suspense>
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup />
        </>
    ) : (
        <Loading />
    );
}

function Loading() {
    return (
        <div style={{ flexGrow: '1', position: 'relative' }}>
            <img
                src={gifSpinner}
                alt="로딩 이미지"
                style={{
                    width: '50px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </div>
    );
}
