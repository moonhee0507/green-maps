import React from 'react';
import imgEdit from '/images/icon-edit.svg';
import imgDelete from '/images/icon-plus.svg';
import { useAppDispatch } from '../../../../../renderer/store/hooks';
import { EDIT_GROUP_MODAL, SET_TARGET_GROUP } from '../../../../../renderer/_reducers/_slices/myListSlice';

export { ButtonGroup };

function ButtonGroup({ groupName }: { groupName: string }) {
    const dispatch = useAppDispatch();

    function handleEdit() {
        const app = document.querySelector('.app');
        app?.classList.add('modal-mode');

        dispatch(EDIT_GROUP_MODAL(true));
        dispatch(SET_TARGET_GROUP(groupName));
    }

    return (
        <div>
            <button className="button-edit-group" type="button" aria-label="그룹 수정 버튼" onClick={handleEdit}>
                <img src={imgEdit} alt="수정 아이콘" />
            </button>
            <button className="button-delete-group" type="button" aria-label="그룹 삭제 버튼">
                <img src={imgDelete} alt="삭제 아이콘" />
            </button>
        </div>
    );
}
