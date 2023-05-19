import React from 'react';
import type { UserInfo } from '../../server/models/User';
import { MyProfile } from './MyProfile/MyProfile';

export { ProfileSection };

function ProfileSection({ userInfo }: { userInfo: UserInfo }) {
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
        </section>
    );
}
