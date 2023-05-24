import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import { EditGroupModal } from './EditGroupModal/EditGroupModal';
import type { UserInfo } from '../../../../../server/models/User';
import { EDIT_GROUP_MODAL, SET_GROUP_NAME, ICON_STANDARD } from '../../../../../renderer/_reducers/_slices/myListSlice';
import { GroupList } from '../../../../../server/models/Bookmark';

export { ModalGroup };

function ModalGroup({ userInfo, groupList }: { userInfo: UserInfo | null; groupList: GroupList[] | null }) {
    const on = useAppSelector((state) => state.myListSlice.editGroupModalOn);
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

    function handleClose(event: MouseEvent) {
        if ((event.target as HTMLElement).className === 'app modal-mode') {
            const app = document.querySelector('.app');
            app?.classList.remove('modal-mode');

            dispatch(EDIT_GROUP_MODAL(false));

            // 새그룹추가 모달 인풋창 초기화
            dispatch(SET_GROUP_NAME(null));
            // 선택 아이콘 초기화
            dispatch(ICON_STANDARD('/images/icon-star.svg'));
        }
    }
    return (
        <div className="mylist-modal-group" {...attr}>
            <EditGroupModal userInfo={userInfo} groupList={groupList} />
        </div>
    );
}
