import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import { ORDER_MODAL } from '../../../renderer/_reducers/_slices/myListSlice';
import { GroupOrderModal } from './GroupOrderModal';

export { ModalGroup };

function ModalGroup() {
    const on = useAppSelector((state) => state.myListSlice.orderModalOn);
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
        }
    }

    return (
        <div className="mylist-modal-group" {...attr}>
            <GroupOrderModal />
        </div>
    );
}
