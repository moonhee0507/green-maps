import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { ADD_GROUP_MODAL, SET_GROUP_NAME, ICON_STANDARD } from '../../../../renderer/_reducers/_slices/myListSlice';
import { GroupNameInput } from './GroupNameInput';
import { IconSelection } from './IconSelection';
import { CompleteButton } from './CompleteButton';
import imgClose from '/images/icon-plus.svg';
import type { UserInfo } from '../../../../server/models/User';

export function AddGroupModal({ userInfo }: { userInfo: UserInfo | null }) {
    const dispatch = useAppDispatch();
    const addGroupModalOn = useAppSelector((state) => state.myListSlice.addGroupModalOn);

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (addGroupModalOn === true) setShow(true);
        else setShow(false);
    }, [addGroupModalOn]);

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(ADD_GROUP_MODAL(false));
        dispatch(SET_GROUP_NAME('')); // 새그룹추가 모달 인풋창 초기화
        dispatch(ICON_STANDARD('/images/icon-star.svg'));
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>새 그룹 추가</h4>
            <form>
                <GroupNameInput />
                <IconSelection />
                <CompleteButton userInfo={userInfo} />
            </form>
            <button type="button" className="button-close" onClick={handleClose}>
                <img src={imgClose} alt="X 아이콘" className="img-close" />
            </button>
        </article>
    );
}
