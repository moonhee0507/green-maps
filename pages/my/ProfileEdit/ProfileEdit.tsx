import React from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import {
    PROFILE_IMAGE_MODAL,
    PROFILE_NICKNAME_MODAL,
    PROFILE_PASSWORD_MODAL,
    SET_NICKNAME,
    SET_USERID,
} from '../../../renderer/_reducers/_slices/profileSlice';
import type { UserInfo } from '../../../server/models/User';
import appModalMode from '../../../components/modal/appModalMode';

export { ProfileEdit };

function ProfileEdit({ userInfo }: { userInfo: UserInfo }) {
    const { nickName, userId, host } = userInfo;
    const dispatch = useAppDispatch();

    const handleEditProfileImg = () => {
        appModalMode(true);
        dispatch(PROFILE_IMAGE_MODAL(true));
    };

    const handleEditNickName = () => {
        appModalMode(true);
        dispatch(PROFILE_NICKNAME_MODAL(true));
        dispatch(SET_NICKNAME(nickName));
    };

    const handleEditPassword = () => {
        appModalMode(true);
        dispatch(PROFILE_PASSWORD_MODAL(true));
        dispatch(SET_USERID(userId));
    };

    return (
        <li className="list-account">
            <p>계정</p>
            <ul>
                <li onClick={handleEditProfileImg} className="list-edit">
                    프로필 사진 변경
                </li>
                <li onClick={handleEditNickName} className="list-edit">
                    닉네임 변경
                </li>
                {host === 'local' ? (
                    <li onClick={handleEditPassword} className="list-edit">
                        비밀번호 변경
                    </li>
                ) : null}
            </ul>
        </li>
    );
}
