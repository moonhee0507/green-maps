import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { DELETE_LIKELIST_MODAL, ORDER_MODAL } from '../../../../renderer/_reducers/_slices/myListSlice';
import type { Like } from '../../../../server/models/User';

export { LikeDetail };

function LikeDetail({ lists }: { lists: Like[] }) {
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

        dispatch(DELETE_LIKELIST_MODAL(true));
    }

    return (
        <div className="style-wrapper-bookmark-detail">
            <div className="wrapper-groupcount-orderbox">
                <p className="txt-bookmarkgroup">
                    전체 <span>{lists.length}</span>
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
