import React from 'react';
import imgEdit from '/images/icon-edit.svg';
import imgDelete from '/images/icon-plus.svg';
import { useAppDispatch } from '../../../../../renderer/store/hooks';
import {
    EDIT_GROUP_MODAL,
    ICON_STANDARD,
    SET_TARGET_GROUP,
} from '../../../../../renderer/_reducers/_slices/myListSlice';
import type { GroupList } from '../../../../../server/models/Bookmark';
import { UserInfo } from '../../../../../server/models/User';
import { API_URL } from '../../../../API_URL/api';

export { ButtonGroup };

function ButtonGroup({ groupInfo, userInfo }: { groupInfo: GroupList; userInfo: UserInfo | null }) {
    const dispatch = useAppDispatch();

    function handleEdit() {
        const app = document.querySelector('.app');
        app?.classList.add('modal-mode');

        dispatch(EDIT_GROUP_MODAL(true));
        dispatch(SET_TARGET_GROUP(groupInfo.name));

        dispatch(ICON_STANDARD(groupInfo.groupIcon));
    }

    async function handleDelete() {
        if (confirm('해당 그룹을 삭제하시겠습니까?')) {
            const userId = userInfo?.userId;
            const groupId = groupInfo._id;

            await fetch(`${API_URL}/bookmark/${groupId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: userId }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        alert('북마크 그룹이 삭제되었습니다.');
                        window.location.reload();
                    } else {
                        alert('다시 시도해주세요.');
                    }
                });
        }
    }

    return (
        <div>
            <button className="button-edit-group" type="button" aria-label="그룹 수정 버튼" onClick={handleEdit}>
                <img src={imgEdit} alt="수정 아이콘" />
            </button>
            <button className="button-delete-group" type="button" aria-label="그룹 삭제 버튼" onClick={handleDelete}>
                <img src={imgDelete} alt="삭제 아이콘" />
            </button>
        </div>
    );
}
