import React from 'react';
import defaultProfile from '/images/default-profile.png';
import type { UserInfo } from '../../../server/models/User';

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

    return (
        <dl>
            <dt className="sr-only">프로필 사진</dt>
            <dd>
                <div className="container-profile-img">
                    <img
                        src={
                            profileImage
                                ? `https://${import.meta.env.VITE_AWS_S3_BUCKET}.s3.${
                                      import.meta.env.VITE_AWS_DEFAULT_REGION
                                  }.amazonaws.com/${profileImage}`
                                : defaultProfile
                        }
                        alt="프로필 사진"
                    />
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
