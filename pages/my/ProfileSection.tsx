import React from 'react';
import { Notice } from './Notice';
import { MyProfile } from './MyProfile/MyProfile';
import { ProfileEdit } from './ProfileEdit/ProfileEdit';
import { CustomerService } from './CustomerService/CustomerService';
import { API_URL } from '../../renderer/CONSTANT_URL';
import type { UserInfo } from '../../server/models/User';

export { ProfileSection };

function ProfileSection({ userInfo }: { userInfo: UserInfo }) {
    async function handleLogout() {
        // 카카오 회원은 카카오 서비스의 토큰 만료시킴
        if (userInfo.host === 'kakao') {
            await fetch(`${API_URL}/oauth/kakao/logout`, {
                method: 'POST',
            });
        }

        // 그린맵 서비스 로그아웃
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
            <Notice host={userInfo.host} />
            <ul className="ul-profile">
                <MyProfile userInfo={userInfo} />
                <ProfileEdit userInfo={userInfo} />
                <CustomerService />
            </ul>
            <div className="style-wrapper-logout">
                <button type="button" onClick={handleLogout} className="styled-button">
                    로그아웃
                </button>
            </div>
        </section>
    );
}
