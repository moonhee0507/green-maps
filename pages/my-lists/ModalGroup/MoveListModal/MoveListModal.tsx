import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import {
    MOVE_LIST_MODAL,
    RESET_CHECKED,
    RESET_RESTAURANT_LIST,
} from '../../../../renderer/_reducers/_slices/myListSlice';
import imgClose from '/images/icon-plus.svg';
import { List } from './Form/List';
import { ButtonGroup } from './Form/ButtonGroup';
import type { Bookmark, UserInfo } from '../../../../server/models/User';

export function MoveListModal({ userInfo }: { userInfo: UserInfo | null }) {
    const [attr, setAttr] = useState({ hidden: true });
    const [bookmarkListInSameGroup, setBookmarkListInSameGroup] = useState<Bookmark[]>([]);

    const moveListModalOn = useAppSelector((state) => state.myListSlice.moveListModalOn);

    useEffect(() => {
        if (moveListModalOn === true) setAttr({ hidden: false });
        else setAttr({ hidden: true });
    }, [moveListModalOn]);

    const groupName = useAppSelector((state) => state.myListSlice.targetGroup);

    useEffect(() => {
        if (userInfo !== null) {
            const sameGroup = userInfo.bookmarkList.filter((list) => list.groupName === groupName);
            setBookmarkListInSameGroup(sameGroup);
        }
    }, [groupName]);

    return (
        <article className="modal-group-move" {...attr}>
            <h4>목록 편집</h4>
            <Form bookmarkList={bookmarkListInSameGroup} />
            <CloseButton />
        </article>
    );
}

function Form({ bookmarkList }: { bookmarkList: Bookmark[] }) {
    return (
        <form>
            <List bookmarkList={bookmarkList} />
            <ButtonGroup />
        </form>
    );
}

function CloseButton() {
    const dispatch = useAppDispatch();

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(MOVE_LIST_MODAL(false));
        dispatch(RESET_CHECKED());
        dispatch(RESET_RESTAURANT_LIST([]));
    }

    return (
        <button type="button" className="button-close" onClick={handleClose}>
            <img src={imgClose} alt="X 아이콘" className="img-close" />
        </button>
    );
}
