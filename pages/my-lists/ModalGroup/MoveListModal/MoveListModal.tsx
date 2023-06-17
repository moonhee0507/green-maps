import React, { useEffect, useState } from 'react';
import store from '../../../../renderer/store';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import {
    MOVE_LIST_MODAL,
    RESET_CHECKED,
    RESET_RESTAURANT_LIST,
} from '../../../../renderer/_reducers/_slices/myListSlice';
import { List } from './Form/List';
import { ButtonGroup } from './Form/ButtonGroup';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import appModalMode from '../../../../components/modal/appModalMode';
import imgClose from '/images/icon-plus.svg';
import type { Bookmark, UserInfo } from '../../../../server/models/User';

export function MoveListModal({ userInfo }: { userInfo: UserInfo | null }) {
    const [show, setShow] = useState(false);
    const [bookmarkListInSameGroup, setBookmarkListInSameGroup] = useState<Bookmark[]>([]);

    const moveListModalOn = useAppSelector((state) => state.myListSlice.moveListModalOn);

    useEffect(() => {
        if (moveListModalOn === true) setShow(true);
        else setShow(false);
    }, [moveListModalOn]);

    const groupName = useAppSelector((state) => state.myListSlice.targetGroup);

    useEffect(() => {
        if (userInfo !== null) {
            getBookmarkList().then((data) => {
                if (data.success) {
                    const groupName = store.getState().myListSlice.targetGroup;
                    const sameGroup = data.bookmarkList.filter((list) => list.groupName === groupName);
                    setBookmarkListInSameGroup(sameGroup);
                }
            });
        }
    }, [groupName]);

    async function getBookmarkList() {
        const res = await fetch(`${API_URL}/users/bookmark`, {
            credentials: 'include',
            method: 'GET',
        });
        const data = (await res.json()) as { success: boolean; bookmarkList: Bookmark[]; message?: string };

        return data;
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
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
        appModalMode(false);

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
