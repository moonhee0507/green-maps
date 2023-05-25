import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import { MOVE_LIST_MODAL, ORDER_MODAL } from '../../../../../renderer/_reducers/_slices/myListSlice';

export function GroupDetail({ count }: { count: number }) {
    /**
     * 북마크그룹 정렬 상태 재사용
     */
    const order = useAppSelector((state) => state.myListSlice.groupNameOrder);
    const dispatch = useAppDispatch();

    function handleOrder() {
        const app = document.querySelector('.app');
        app?.classList.add('modal-mode');

        dispatch(ORDER_MODAL(true));
    }

    function handleEdit() {
        const app = document.querySelector('.app');
        app?.classList.add('modal-mode');

        dispatch(MOVE_LIST_MODAL(true));
    }

    return (
        <div className="style-wrapper-bookmark-detail">
            <div className="wrapper-groupcount-orderbox">
                <p className="txt-bookmarkgroup">
                    전체 <span>{count}</span>
                </p>
                <div className="container-order-bookmarkgroup">
                    <button type="button" className="button-order-bookmarkgroup" onClick={handleOrder}>
                        {order}
                    </button>
                </div>
            </div>
            <button type="button" className="button-edit-bookmarkgroup" onClick={handleEdit}>
                편집하기
            </button>
        </div>
    );
}
