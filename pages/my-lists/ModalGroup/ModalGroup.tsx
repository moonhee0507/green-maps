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
} from '../../../renderer/_reducers/_slices/myListSlice';
import { GroupOrderModal } from './GroupOrderModal';
import { AddGroupModal } from './AddGroupModal/AddGroupModal';
import { MoveListModal } from './MoveListModal/MoveListModal';
import { WhereToCopyModal } from './WhereToCopyModal/WhereToCopyModal';
import type { UserInfo } from '../../../server/models/User';

export function ModalGroup({ userInfo }: { userInfo: UserInfo | null }) {
    const on = useAppSelector(
        (state) =>
            state.myListSlice.orderModalOn ||
            state.myListSlice.addGroupModalOn ||
            state.myListSlice.moveListModalOn ||
            state.myListSlice.copyModalOn
    );
    const [attr, setAttr] = useState({ hidden: true });

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (on === true) setAttr({ hidden: false });
        else setAttr({ hidden: true });
    }, [on]);

    useEffect(() => {
        if (attr.hidden === false) {
            document.addEventListener('click', handleClose);
        }

        return () => {
            document.removeEventListener('click', handleClose);
        };
    }, [attr]);

    function handleClose(event: any) {
        if (event.target.className === 'app modal-mode') {
            const app = document.querySelector('.app');
            app?.classList.remove('modal-mode');

            dispatch(ORDER_MODAL(false));
            dispatch(ADD_GROUP_MODAL(false));
            dispatch(MOVE_LIST_MODAL(false));
            dispatch(COPY_MODAL(false));

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
        <div className="mylist-modal-group" {...attr}>
            <GroupOrderModal />
            <AddGroupModal userInfo={userInfo} />
            <MoveListModal userInfo={userInfo} />
            <WhereToCopyModal userInfo={userInfo} />
        </div>
    );
}
