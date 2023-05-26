import React from 'react';
import { useAppDispatch } from '../../../../renderer/store/hooks';
import {
    COPY_MODAL,
    MOVE_LIST_MODAL,
    RESET_CHECKED,
    RESET_RESTAURANT_LIST,
} from '../../../../renderer/_reducers/_slices/myListSlice';
import closeImg from '/images/icon-plus.svg';

export { CloseButton };

function CloseButton() {
    const dispatch = useAppDispatch();

    function handleClose() {
        dispatch(COPY_MODAL(false));
        dispatch(MOVE_LIST_MODAL(true));
        dispatch(RESET_CHECKED());
        dispatch(RESET_RESTAURANT_LIST([]));
    }

    return (
        <button type="button" className="button-close" onClick={handleClose}>
            <img src={closeImg} alt="X 아이콘" className="img-close" />
        </button>
    );
}
