import React from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { PROFILE_IMAGE_MODAL } from '../../../renderer/_reducers/_slices/profileSlice';

export { ProfileEdit };

function ProfileEdit() {
    const dispatch = useAppDispatch();

    const handleEditProfileImg = () => {
        modalModeOn();
    };

    function modalModeOn() {
        const app = document.querySelector('.app');
        app?.classList.add('modal-mode');
        dispatch(PROFILE_IMAGE_MODAL(true));
    }

    return (
        <li>
            <p>계정</p>
            <ul>
                <li onClick={handleEditProfileImg}>프로필 사진 변경</li>
                <li>닉네임 변경</li>
                <li>비밀번호 변경</li>
            </ul>
        </li>
    );
}
