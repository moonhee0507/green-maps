import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import {
    PROFILE_IMAGE_MODAL,
    PROFILE_NICKNAME_MODAL,
    SET_NICKNAME,
    EDIT_NICKNAME,
    PROFILE_PASSWORD_MODAL,
} from '../../../renderer/_reducers/_slices/profileSlice';
import { EditProfileImageModal } from './EditProfileImageModal/EditProfileImageModal';
import { EditNickNameModal } from './EditNickNameModal/EditNickNameModal';
import { EditPasswordModal } from './EditPasswordModal/editPasswordModal';

export { ModalGroup };

function ModalGroup() {
    const on = useAppSelector(
        (state) =>
            state.profileSlice.profileImageModalOn ||
            state.profileSlice.profileNickNameModalOn ||
            state.profileSlice.profilePasswordModalOn
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
        }
    }

    return (
        <div className={`modal-group ${show ? 'on' : ''}`}>
            <EditProfileImageModal />
            <EditNickNameModal />
            <EditPasswordModal />
        </div>
    );
}
