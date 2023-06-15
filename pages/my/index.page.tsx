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

export function Page(pageContext: PageContext) {
    // const { isLoggedIn, info } = pageContext.user;
    const isLoggedIn = useCheckLoginStatus();
    const info = pageContext.user.info || null;

    const { reviews } = pageContext;

    useEffect(() => {
        if (isLoggedIn === false) {
            alert('로그인 페이지로 이동합니다.');
            window.location.href = '/login';
        }
    }, []);

    return (
        isLoggedIn &&
        info && (
            <>
                <TopBar title="내 정보" />
                <MyMain userInfo={info} reviews={reviews} />
                <NavBar isLoggedIn={isLoggedIn} />
                <ModalGroup />
            </>
        )
    );
}

function MyMain({ userInfo, reviews }: { userInfo: UserInfo; reviews: Review[] }) {
    const [showSection, setShowSection] = useState<string>('프로필');

    useEffect(() => {
        const $1 = window.localStorage.getItem('#1');

        const arrTitle = ['프로필', '식당 리뷰', '커뮤니티 활동'];
        const lists = Array.from(document.querySelectorAll('.list-title'));

        if ($1) {
            lists[arrTitle.indexOf($1)].classList.add('on');
            setShowSection($1);
        } else {
            lists[0].classList.add('on');
        }
    }, []);

    function handleClick(event: MouseEvent<HTMLElement>) {
        const clickedNode = event.currentTarget;
        const lists = Array.from(document.querySelectorAll('.list-title'));

        lists.forEach((list) => list.classList.remove('on'));

        clickedNode.classList.add('on');

        setShowSection(clickedNode.innerText);
        window.localStorage.setItem('#1', clickedNode.innerText);
    }

    return (
        <main className="main-my">
            <ul className="ul-title-bar">
                <li className="list-title" onClick={handleClick}>
                    프로필
                </li>
                <li className="list-title" onClick={handleClick}>
                    식당 리뷰
                </li>
                <li className="list-title" onClick={handleClick}>
                    커뮤니티 활동
                </li>
            </ul>
            {(() => {
                switch (showSection) {
                    case '프로필':
                        return <ProfileSection userInfo={userInfo} />;
                    case '식당 리뷰':
                        return <MyReviewSection userInfo={userInfo} reviews={reviews} />;
                    case '커뮤니티 활동':
                        return <MyCommunitySection userInfo={userInfo} />;
                    default:
                        return <ProfileSection userInfo={userInfo} />;
                }
            })()}
        </main>
    );
}
