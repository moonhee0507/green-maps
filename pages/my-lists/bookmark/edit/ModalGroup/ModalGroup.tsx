import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import { EditGroupModal } from './EditGroupModal/EditGroupModal';
import {
    EDIT_GROUP_MODAL,
    SET_GROUP_NAME,
    ICON_STANDARD,
    ORDER_MODAL,
} from '../../../../../renderer/_reducers/_slices/myListSlice';
import type { UserInfo } from '../../../../../server/models/User';
import type { GroupList } from '../../../../../server/models/Bookmark';
import { GroupOrderModal } from './GroupOrderModal';

export { ModalGroup };

function ModalGroup({ userInfo, groupList }: { userInfo: UserInfo | null; groupList: GroupList[] | null }) {
    const on = useAppSelector((state) => state.myListSlice.editGroupModalOn);
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

    function handleClose(event: MouseEvent) {
        if ((event.target as HTMLElement).className === 'app modal-mode') {
            const app = document.querySelector('.app');
            app?.classList.remove('modal-mode');

            dispatch(ORDER_MODAL(false));
            dispatch(EDIT_GROUP_MODAL(false));

            // 새그룹추가 모달 인풋창 초기화
            dispatch(SET_GROUP_NAME(null));
            // 선택 아이콘 초기화
            dispatch(ICON_STANDARD('/images/icon-star.svg'));
        }
    }
    return (
        <div className={`modal-group ${show ? 'on' : ''}`}>
            <GroupOrderModal />
            <EditGroupModal userInfo={userInfo} groupList={groupList} />
        </div>
    );
}
