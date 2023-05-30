import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { PROFILE_PASSWORD_MODAL } from '../../../../renderer/_reducers/_slices/profileSlice';
import imgClose from '/images/icon-plus.svg';

export { EditPasswordModal };

function EditPasswordModal() {
    const dispatch = useAppDispatch();

    const [show, setShow] = useState(false);
    const profilePasswordModalOn = useAppSelector((state) => state.profileSlice.profilePasswordModalOn);

    useEffect(() => {
        if (profilePasswordModalOn === true) setShow(true);
        else setShow(false);
    }, [profilePasswordModalOn]);

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(PROFILE_PASSWORD_MODAL(false));
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>비밀번호 재설정</h4>
            <CurrentPassword />
            <NewPassword />
            <button type="button" className="button-close" onClick={handleClose}>
                <img src={imgClose} alt="X 아이콘" className="img-close" />
            </button>
        </article>
    );
}

function CurrentPassword() {
    return (
        <>
            <form>
                <p>그린맵 계정의 현재 비밀번호를 확인해주세요.</p>
                <label htmlFor="userId" className="sr-only">
                    아이디
                </label>
                <input type="text" id="userId" readOnly={true} defaultValue={''} />
                <label htmlFor="prevPassword">현재 비밀번호</label>
                <input type="password" id="prevPassword" />
            </form>
            <button type="button">완료</button>
        </>
    );
}

function NewPassword() {
    return (
        <>
            <form>
                <p>새로운 비밀번호를 입력해주세요.</p>
                <label htmlFor="nextPassword">비밀번호</label>
                <input type="password" id="nextPassword" />
                <label htmlFor="confirmNextPassword">비밀번호 재입력</label>
                <input type="password" id="confirmNextPassword" />
            </form>
            <button type="button">완료</button>
        </>
    );
}
