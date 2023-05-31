import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import {
    PASS_CURRENT_PASSWORD,
    PROFILE_PASSWORD_MODAL,
    SET_USERID,
} from '../../../../renderer/_reducers/_slices/profileSlice';
import { NewPassword } from './NewPassword';
import { CurrentPassword } from './CurrentPassword';
import imgClose from '/images/icon-plus.svg';

export { EditPasswordModal };

function EditPasswordModal() {
    const dispatch = useAppDispatch();

    const [show, setShow] = useState(false);
    const profilePasswordModalOn = useAppSelector((state) => state.profileSlice.profilePasswordModalOn);
    const passCurrentPassword = useAppSelector((state) => state.profileSlice.passCurrentPassword);

    useEffect(() => {
        if (profilePasswordModalOn === true) setShow(true);
        else setShow(false);
    }, [profilePasswordModalOn]);

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(PROFILE_PASSWORD_MODAL(false));
        dispatch(PASS_CURRENT_PASSWORD(false));
        dispatch(SET_USERID(''));
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>비밀번호 재설정</h4>
            {passCurrentPassword ? <NewPassword /> : <CurrentPassword />}
            <button type="button" className="button-close" onClick={handleClose}>
                <img src={imgClose} alt="X 아이콘" className="img-close" />
            </button>
        </article>
    );
}
