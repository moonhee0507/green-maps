import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { EDIT_DELETE_NOTIFY_MODAL, SET_POST_ID } from '../../../../renderer/_reducers/_slices/postSlice';
import { EditDeleteNotifyModal } from './EditDeleteNotifyModal/EditDeleteNotifyModal';

export { ModalGroup };

function ModalGroup() {
    const on = useAppSelector((state) => state.postSlice.editDeleteNotifyModalOn);
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

            dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
            dispatch(SET_POST_ID(''));
        }
    }

    return (
        <div className="post-modal-group" {...attr}>
            <EditDeleteNotifyModal />
        </div>
    );
}
