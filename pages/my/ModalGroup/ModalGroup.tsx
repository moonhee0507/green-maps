import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import {
    PROFILE_IMAGE_MODAL,
    PROFILE_NICKNAME_MODAL,
    SET_NICKNAME,
    EDIT_NICKNAME,
    PROFILE_PASSWORD_MODAL,
    PASS_CURRENT_PASSWORD,
    SET_USERID,
} from '../../../renderer/_reducers/_slices/profileSlice';
import { EditProfileImageModal } from './EditProfileImageModal/EditProfileImageModal';
import { EditNickNameModal } from './EditNickNameModal/EditNickNameModal';
import { EditPasswordModal } from './EditPasswordModal/EditPasswordModal';
import { EditDeleteNotifyModal } from './EditDeleteNotifyModal/EditDeleteNotifyModal';
import {
    EDIT_DELETE_NOTIFY_MODAL,
    SAME_USER_OWNER,
    SET_RESTAURANT_ID,
    SET_REVIEW_ID,
} from '../../../renderer/_reducers/_slices/reviewSlice';

export { ModalGroup };

function ModalGroup() {
    const on = useAppSelector(
        (state) =>
            state.profileSlice.profileImageModalOn ||
            state.profileSlice.profileNickNameModalOn ||
            state.profileSlice.profilePasswordModalOn ||
            state.reviewSlice.editDeleteNotifyModalOn // 리뷰 슬라이스 재사용
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

    function handleClose(event: MouseEvent) {
        if ((event.target as HTMLElement).className === 'app modal-mode') {
            const app = document.querySelector('.app');
            app?.classList.remove('modal-mode');

            dispatch(PROFILE_IMAGE_MODAL(false));

            dispatch(PROFILE_NICKNAME_MODAL(false));
            dispatch(SET_NICKNAME(''));
            dispatch(EDIT_NICKNAME(''));

            dispatch(PROFILE_PASSWORD_MODAL(false));
            dispatch(PASS_CURRENT_PASSWORD(false));
            dispatch(SET_USERID(''));

            dispatch(EDIT_DELETE_NOTIFY_MODAL(false)); // 리뷰 슬라이스 재사용
            dispatch(SAME_USER_OWNER(false));
            dispatch(SET_REVIEW_ID(''));
            dispatch(SET_RESTAURANT_ID(''));
        }
    }

    return (
        <div className={`modal-group ${show ? 'on' : ''}`}>
            <EditProfileImageModal />
            <EditNickNameModal />
            <EditPasswordModal />
            <EditDeleteNotifyModal />
        </div>
    );
}
