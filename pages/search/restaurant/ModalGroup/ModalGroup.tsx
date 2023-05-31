import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { EDIT_DELETE_NOTIFY_MODAL } from '../../../../renderer/_reducers/_slices/reviewSlice';
import { EditDeleteNotifyModal } from './EditDeleteNotifyModal/EditDeleteNotifyModal';

export { ModalGroup };

function ModalGroup() {
    const on = useAppSelector((state) => state.reviewSlice.editDeleteNotifyModalOn);
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

            dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
        }
    }

    return (
        <div className={`modal-group ${show ? 'on' : ''}`}>
            <EditDeleteNotifyModal />
        </div>
    );
}
