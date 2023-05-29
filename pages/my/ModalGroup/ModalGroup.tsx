import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import { PROFILE_IMAGE_MODAL } from '../../../renderer/_reducers/_slices/profileSlice';
import { EditProfileImageModal } from './EditProfileImageModal/EditProfileImageModal';
import { EditNickNameModal } from './EditNickNameModal/EditNickNameModal';

export { ModalGroup };

function ModalGroup() {
    const on = useAppSelector(
        (state) => state.profileSlice.profileImageModalOn || state.profileSlice.profileNickNameModalOn
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

    function handleClose(event: MouseEvent) {
        if ((event.target as HTMLElement).className === 'app modal-mode') {
            const app = document.querySelector('.app');
            app?.classList.remove('modal-mode');

            dispatch(PROFILE_IMAGE_MODAL(false));
        }
    }

    return (
        <div className="modal-group" {...attr}>
            <EditProfileImageModal />
            <EditNickNameModal />
        </div>
    );
}
