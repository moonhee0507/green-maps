import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { NickNameForm } from './NickNameForm';
import { Notice } from './Notice';
import { SubmitButton } from './SubmitButton';
import imgClose from '/images/icon-plus.svg';
import {
    PROFILE_NICKNAME_MODAL,
    SET_NICKNAME,
    EDIT_NICKNAME,
} from '../../../../renderer/_reducers/_slices/profileSlice';

export { EditNickNameModal };

function EditNickNameModal() {
    const dispatch = useAppDispatch();

    const profileNickNameModalOn = useAppSelector((state) => state.profileSlice.profileNickNameModalOn);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (profileNickNameModalOn === true) setShow(true);
        else setShow(false);
    }, [profileNickNameModalOn]);

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(PROFILE_NICKNAME_MODAL(false));
        dispatch(SET_NICKNAME(''));
        dispatch(EDIT_NICKNAME(''));
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>닉네임 변경</h4>
            <NickNameForm />
            <Notice />
            <SubmitButton />
            <button type="button" className="button-close" onClick={handleClose}>
                <img src={imgClose} alt="X 아이콘" className="img-close" />
            </button>
        </article>
    );
}
