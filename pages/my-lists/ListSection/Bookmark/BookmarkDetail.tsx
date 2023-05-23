import React from 'react';
import { navigate } from 'vite-plugin-ssr/client/router';
import type { Bookmark } from '../../../../server/models/User';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { ORDER_MODAL } from '../../../../renderer/_reducers/_slices/myListSlice';

export { BookmarkDetail };

function BookmarkDetail({ lists }: { lists: Bookmark[] }) {
    const arrGroupName = [...new Set(lists.map((list) => list.groupName))];
    const order = useAppSelector((state) => state.myListSlice.groupNameOrder);
    const dispatch = useAppDispatch();

    function handleOrder() {
        const app = document.querySelector('.app');
        app?.classList.add('modal-mode');

        dispatch(ORDER_MODAL(true));
    }

    function handleEdit() {
        navigate('/my-lists/bookmark/edit');
    }

    return (
        <div className="style-wrapper-bookmark-detail">
            <div className="wrapper-groupcount-orderbox">
                <p className="txt-bookmarkgroup">
                    그룹 <span>{arrGroupName.length}</span>
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
