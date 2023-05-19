import React from 'react';
import defaultProfile from '/images/default-profile.png';
import camera from '/images/camera.png';
import type { UserInfo } from '../../../server/models/User';

export function MyProfile({ userInfo }: { userInfo: UserInfo }) {
    const { host } = userInfo;
    return (
        <li className="style-wrapper-profile">
            <ProfileImage />
            <ProfileDetail userInfo={userInfo} />
            <HostBox host={host} />
        </li>
    );
}

function ProfileImage() {
    return (
        <dl>
            <dt className="sr-only">프로필 사진</dt>
            <dd>
                <div className="wrapper-profile-image">
                    <div
                        style={{
                            backgroundImage: `url(${defaultProfile})`,
                            backgroundSize: '70px 70px',
                            width: '70px',
                            height: '70px',
                        }}
                    />
                    <img className="button-add-profile-image" src={camera} alt="프로필 사진 추가 버튼" />
                </div>
            </dd>
        </dl>
    );
}

function ProfileDetail({ userInfo }: { userInfo: UserInfo }) {
    const { nickName, bookmarkList, likeList, userId } = userInfo;

    return (
        <dl className="wrapper-id-bookmark">
            <dl className="container-id-nick">
                <dt className="sr-only">아이디</dt>
                <dd className="txt-profile-userId">{userId}</dd>
                <dt className="sr-only">닉네임</dt>
                <dd className="txt-profile-nickName">{nickName}</dd>
            </dl>
            <dl className="container-profile-bookmark-like">
                <dt>북마크</dt>
                <dd className="num-profile-bookmark">{bookmarkList.length}</dd>
                <dt>좋아요</dt>
                <dd className="num-profile-like">{likeList.length}</dd>
            </dl>
        </dl>
    );
}

function HostBox({ host }: { host: string }) {
    return (
        <div className="txt-host">
            {(() => {
                switch (host) {
                    case 'local':
                        return '자체 계정';
                    case 'daum':
                        return '다음카카오';
                    case 'naver':
                        return '네이버';
                    default:
                        return '자체 계정';
                }
            })()}
        </div>
    );
}
