import React, { MouseEvent, useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { NavBar } from '../../components/navBar';
import { API_URL } from '../API_URL/api';
import { UserInfo } from '../../server/models/User';
import { ProfileSection } from './ProfileSection';
import { Page as ErrorPage } from '../../renderer/_error.page';
import { MyReviewSection } from './MyReviewSection/MyReviewSection';
import { MyCommunitySection } from './MyCommunitySection/MyCommunitySection';

export function Page() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/users/`);
            const data = await res.json();

            if (data.success === true) {
                setIsLoggedIn(true);
                setUserInfo(data.user);
            } else {
                setIsLoggedIn(false);
                setUserInfo(null);
                // 로그인 안하면 경고창
            }
        })();
    }, []);

    return (
        userInfo && (
            <>
                <TopBar title="내 정보" />
                <MyMain userInfo={userInfo} />
                <NavBar isLoggedIn={isLoggedIn} />
            </>
        )
    );
}

function MyMain({ userInfo }: { userInfo: UserInfo }) {
    const [showSection, setShowSection] = useState<string>('프로필');

    useEffect(() => {
        const $1 = window.localStorage.getItem('#1');

        const arrTitle = ['프로필', '식당 리뷰', '커뮤니티 활동'];
        const lists = Array.from(document.querySelectorAll('.list-title'));

        if ($1) {
            lists[arrTitle.indexOf($1)].classList.add('on');
            setShowSection($1);
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
                        return <MyReviewSection userInfo={userInfo} />;
                    case '커뮤니티 활동':
                        return <MyCommunitySection userInfo={userInfo} />;
                    default:
                        return <ProfileSection userInfo={userInfo} />;
                }
            })()}
        </main>
    );
}
