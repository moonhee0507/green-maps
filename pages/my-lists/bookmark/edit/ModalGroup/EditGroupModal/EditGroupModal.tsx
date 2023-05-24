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
import closeImg from '/images/icon-plus.svg';
import type { UserInfo } from '../../../../../../server/models/User';
import type { GroupList } from '../../../../../../server/models/Bookmark';

export function EditGroupModal({ userInfo, groupList }: { userInfo: UserInfo | null; groupList: GroupList[] | null }) {
    const dispatch = useAppDispatch();
    const editGroupModalOn = useAppSelector((state) => state.myListSlice.editGroupModalOn);

    const [attr, setAttr] = useState({ hidden: true });

    useEffect(() => {
        if (editGroupModalOn === true) setAttr({ hidden: false });
        else setAttr({ hidden: true });
    }, [editGroupModalOn]);

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(EDIT_GROUP_MODAL(false));
        dispatch(SET_GROUP_NAME(null));
        dispatch(ICON_STANDARD('/images/icon-star.svg'));
    }

    return (
        <article className="modal-group-add" {...attr}>
            <h4>그룹 수정</h4>
            <form action="">
                <GroupNameInput />
                <IconSelection />
                <CompleteButton userInfo={userInfo} groupList={groupList} />
            </form>
            <button type="button" className="button-close" onClick={handleClose}>
                <img src={closeImg} alt="X 아이콘" className="img-close" />
            </button>
        </article>
    );
}
