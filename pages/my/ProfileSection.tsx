import React from 'react';
import type { UserInfo } from '../../server/models/User';
import { MyProfile } from './MyProfile/MyProfile';
import { API_URL } from '../API_URL/api';

export { ProfileSection };

function ProfileSection({ userInfo }: { userInfo: UserInfo }) {
    async function handleLogout() {
        const res = await fetch(`${API_URL}/users/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.ok === true) {
            window.localStorage.removeItem('#1');
            window.localStorage.removeItem('#2');
            window.location.href = '/';
        }
    }

    return (
        <section>
            <h3 className="sr-only">프로필</h3>
            <ul className="ul-profile">
                <MyProfile userInfo={userInfo} />
                <li className="wrapper-profile-notice">
                    <a href="">공지사항</a>
                </li>
                <li className="wrapper-profile-inquiry">
                    <a href="">1:1 문의</a>
                </li>
                <li className="wrapper-profile-FAQ">
                    <a href="">자주 찾는 질문</a>
                </li>
            </ul>
            <div className="style-wrapper-logout">
                <button type="button" onClick={handleLogout}>
                    로그아웃
                </button>
            </div>
        </section>
    );
}
