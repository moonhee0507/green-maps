import React from 'react';
import { useAppDispatch } from '../../../../renderer/store/hooks';
import {
    DELETE_LIKELIST_MODAL,
    RESET_CHECKED,
    RESET_RESTAURANT_LIST,
} from '../../../../renderer/_reducers/_slices/myListSlice';
import imgClose from '/images/icon-plus.svg';

export { CloseButton };

function CloseButton() {
    const dispatch = useAppDispatch();

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(DELETE_LIKELIST_MODAL(false));
        dispatch(RESET_CHECKED());
        dispatch(RESET_RESTAURANT_LIST([]));
    }

    return (
        <button type="button" className="button-close" onClick={handleClose}>
            <img src={imgClose} alt="X 아이콘" className="img-close" />
        </button>
    );
}
