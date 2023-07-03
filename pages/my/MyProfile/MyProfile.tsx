import React, { useEffect, useState } from 'react';
import defaultProfile from '/images/default-profile.webp';
import type { UserInfo } from '../../../server/models/User';
import { IMG_URL } from '../../../renderer/CONSTANT_URL';

export function MyProfile({ userInfo }: { userInfo: UserInfo }) {
    const { host } = userInfo;
    return (
        <li className="style-wrapper-profile">
            <ProfileImage userInfo={userInfo} />
            <ProfileDetail userInfo={userInfo} />
        </li>
    );
}

function ProfileImage({ userInfo }: { userInfo: UserInfo }) {
    const { profileImage } = userInfo;
    const [src, setSrc] = useState(defaultProfile);

    useEffect(() => {
        if (userInfo.profileImage) {
            if (profileImage.includes('http://')) {
                setSrc(profileImage);
            } else if (profileImage) {
                setSrc(`${IMG_URL}/${profileImage}`);
            }
        } else {
            setSrc(defaultProfile);
        }
    }, [userInfo]);

    return (
        <dl>
            <dt className="sr-only">프로필 사진</dt>
            <dd>
                <div className="container-profile-img">
                    <img src={src} alt="프로필 사진" />
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
