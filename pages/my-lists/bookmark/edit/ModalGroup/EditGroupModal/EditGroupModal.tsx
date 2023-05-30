import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../renderer/store/hooks';
import { GroupNameInput } from './GroupNameInput';
import { IconSelection } from '../../../../ModalGroup/AddGroupModal/IconSelection';
import { CompleteButton } from './CompleteButton';
import {
    EDIT_GROUP_MODAL,
    SET_GROUP_NAME,
    ICON_STANDARD,
} from '../../../../../../renderer/_reducers/_slices/myListSlice';
import imgClose from '/images/icon-plus.svg';
import type { UserInfo } from '../../../../../../server/models/User';
import type { GroupList } from '../../../../../../server/models/Bookmark';

export function EditGroupModal({ userInfo, groupList }: { userInfo: UserInfo | null; groupList: GroupList[] | null }) {
    const dispatch = useAppDispatch();
    const editGroupModalOn = useAppSelector((state) => state.myListSlice.editGroupModalOn);

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (editGroupModalOn === true) setShow(true);
        else setShow(false);
    }, [editGroupModalOn]);

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(EDIT_GROUP_MODAL(false));
        dispatch(SET_GROUP_NAME(null));
        dispatch(ICON_STANDARD('/images/icon-star.svg'));
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>그룹 수정</h4>
            <form action="">
                <GroupNameInput />
                <IconSelection />
                <CompleteButton userInfo={userInfo} groupList={groupList} />
            </form>
            <button type="button" className="button-close" onClick={handleClose}>
                <img src={imgClose} alt="X 아이콘" className="img-close" />
            </button>
        </article>
    );
}
