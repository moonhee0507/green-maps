import React from 'react';
import imgClose from '/images/icon-plus.svg';
import { useAppDispatch } from '../../../../renderer/store/hooks';
import appModalMode from '../../../../components/modal/appModalMode';
import { CATEGORY_FILTER_MODAL } from '../../../../renderer/_reducers/_slices/mapSlice';

export function CloseButton() {
    const dispatch = useAppDispatch();

    function handleClose() {
        appModalMode(false);

        dispatch(CATEGORY_FILTER_MODAL(false));
    }

    return (
        <button type="button" className="button-close" onClick={handleClose}>
            <img src={imgClose} alt="X 아이콘" className="img-close" />
        </button>
    );
}
