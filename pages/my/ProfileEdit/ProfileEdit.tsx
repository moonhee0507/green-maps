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

export { ProfileEdit };

function ProfileEdit({ userInfo }: { userInfo: UserInfo }) {
    const { nickName, userId } = userInfo;
    const dispatch = useAppDispatch();

    const handleEditProfileImg = () => {
        modalModeOn();
        dispatch(PROFILE_IMAGE_MODAL(true));
    };

    const handleEditNickName = () => {
        modalModeOn();
        dispatch(PROFILE_NICKNAME_MODAL(true));
        dispatch(SET_NICKNAME(nickName));
    };

    const handleEditPassword = () => {
        modalModeOn();
        dispatch(PROFILE_PASSWORD_MODAL(true));
        dispatch(SET_USERID(userId));
    };

    function modalModeOn() {
        const app = document.querySelector('.app');
        app?.classList.add('modal-mode');
    }

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
                <li onClick={handleEditPassword} className="list-edit">
                    비밀번호 변경
                </li>
            </ul>
        </li>
    );
}
