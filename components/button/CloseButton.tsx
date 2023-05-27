import React from 'react';
import imgClose from '/images/icon-plus.svg';
import { useAppDispatch } from '../../renderer/store/hooks';
import { ORDER_MODAL } from '../../renderer/_reducers/_slices/myListSlice';

export { CloseButton };

function CloseButton() {
    const dispatch = useAppDispatch();

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(ORDER_MODAL(false));
    }
    return (
        <button type="button" className="button-close" onClick={handleClose}>
            <img src={imgClose} alt="X 아이콘" className="img-close" />
        </button>
    );
}
