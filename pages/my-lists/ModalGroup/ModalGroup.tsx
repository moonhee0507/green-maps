import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import {
    ADD_GROUP_MODAL,
    ORDER_MODAL,
    SET_GROUP_NAME,
    ICON_STANDARD,
    MOVE_LIST_MODAL,
    RESET_CHECKED,
    COPY_MODAL,
    RESET_RESTAURANT_LIST,
    DELETE_LIKELIST_MODAL,
} from '../../../renderer/_reducers/_slices/myListSlice';
import { GroupOrderModal } from './GroupOrderModal';
import { AddGroupModal } from './AddGroupModal/AddGroupModal';
import { MoveListModal } from './MoveListModal/MoveListModal';
import { WhereToCopyModal } from './WhereToCopyModal/WhereToCopyModal';
import type { UserInfo } from '../../../server/models/User';
import { DeleteMultiLike } from './DeleteMultiLike/DeleteMultiLike';

export function ModalGroup({ userInfo }: { userInfo: UserInfo | null }) {
    const on = useAppSelector(
        (state) =>
            state.myListSlice.orderModalOn ||
            state.myListSlice.addGroupModalOn ||
            state.myListSlice.moveListModalOn ||
            state.myListSlice.copyModalOn ||
            state.myListSlice.deleteLikeListModalOn
    );
    const [show, setShow] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (on === true) setShow(true);
        else setShow(false);
    }, [on]);

    useEffect(() => {
        if (show) {
            document.addEventListener('click', handleClose);
        }

        return () => {
            document.removeEventListener('click', handleClose);
        };
    }, [show]);

    function handleClose(event: any) {
        if (event.target.className === 'app modal-mode') {
            const app = document.querySelector('.app');
            app?.classList.remove('modal-mode');

            dispatch(ORDER_MODAL(false));
            dispatch(ADD_GROUP_MODAL(false));
            dispatch(MOVE_LIST_MODAL(false));
            dispatch(COPY_MODAL(false));
            dispatch(DELETE_LIKELIST_MODAL(false));

            // 새그룹추가 모달 인풋창 초기화
            dispatch(SET_GROUP_NAME(''));
            // 선택 아이콘 초기화
            dispatch(ICON_STANDARD('/images/icon-star.svg'));
            // 체크박스 카운트 초기화
            dispatch(RESET_CHECKED());
            // 체크된 식당의 Id 배열 초기화
            dispatch(RESET_RESTAURANT_LIST([]));
        }
    }

    return (
        <div className={`modal-group ${show ? 'on' : ''}`}>
            <GroupOrderModal />
            <AddGroupModal userInfo={userInfo} />
            <MoveListModal userInfo={userInfo} />
            <WhereToCopyModal userInfo={userInfo} />
            <DeleteMultiLike userInfo={userInfo} />
        </div>
    );
}
