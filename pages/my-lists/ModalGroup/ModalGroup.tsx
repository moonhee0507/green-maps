import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import {
    ADD_GROUP_MODAL,
    ORDER_MODAL,
    SET_GROUP_NAME,
    ICON_STANDARD,
    MOVE_LIST_MODAL,
} from '../../../renderer/_reducers/_slices/myListSlice';
import { GroupOrderModal } from './GroupOrderModal';
import { AddGroupModal } from './AddGroupModal/AddGroupModal';
import closeImg from '/images/icon-plus.svg';
import type { UserInfo } from '../../../server/models/User';

export { ModalGroup };

function ModalGroup({ userInfo }: { userInfo: UserInfo | null }) {
    const on = useAppSelector(
        (state) =>
            state.myListSlice.orderModalOn || state.myListSlice.addGroupModalOn || state.myListSlice.moveListModalOn
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

            // 새그룹추가 모달 인풋창 초기화
            dispatch(SET_GROUP_NAME(''));
            // 선택 아이콘 초기화
            dispatch(ICON_STANDARD('/images/icon-star.svg'));
        }
    }

    return (
        <div className="mylist-modal-group" {...attr}>
            <GroupOrderModal />
            <AddGroupModal userInfo={userInfo} />
            <MoveListModal />
        </div>
    );
}

function MoveListModal() {
    const dispatch = useAppDispatch();
    const [attr, setAttr] = useState({ hidden: true });

    const moveListModalOn = useAppSelector((state) => state.myListSlice.moveListModalOn);

    useEffect(() => {
        if (moveListModalOn === true) setAttr({ hidden: false });
        else setAttr({ hidden: true });
    }, [moveListModalOn]);

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(MOVE_LIST_MODAL(false));
    }

    return (
        <article className="modal-group-move" {...attr}>
            <h4>목록 편집</h4>
            <form>
                <label>
                    <input type="checkbox" />
                    목록(리스트 그대로!?)
                </label>
                <div className="container-button-move">
                    <button type="button">선택 해제</button>
                    <button type="button">복사</button>
                    <button type="button">삭제</button>
                </div>
            </form>
            <button type="button" className="button-close" onClick={handleClose}>
                <img src={closeImg} alt="X 아이콘" className="img-close" />
            </button>
        </article>
    );
}
