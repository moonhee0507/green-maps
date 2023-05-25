import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import { RESET_CHECKED } from '../../../../../renderer/_reducers/_slices/myListSlice';

export { ButtonGroup };

function ButtonGroup() {
    const dispatch = useAppDispatch();

    const countChecked = useAppSelector((state) => state.myListSlice.countChecked);

    return (
        <div className="container-button-move">
            <button type="reset" onClick={() => dispatch(RESET_CHECKED())}>
                선택 해제
            </button>
            <button type="button">
                <span className="txt-copy-del">복사</span>
                <span>{countChecked}</span>
            </button>
            <button type="button">
                <span className="txt-copy-del">삭제</span>
                <span>{countChecked}</span>
            </button>
        </div>
    );
}
