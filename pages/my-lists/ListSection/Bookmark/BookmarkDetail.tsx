import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { ORDER_MODAL } from '../../../../renderer/_reducers/_slices/myListSlice';
import appModalMode from '../../../../components/modal/appModalMode';
import type { Bookmark } from '../../../../server/models/User';
import type { GroupList } from '../../../../server/models/Bookmark';

export { BookmarkDetail };

function BookmarkDetail({ lists, groupList }: { lists: Bookmark[]; groupList: GroupList[] | null }) {
    const order = useAppSelector((state) => state.myListSlice.groupNameOrder);
    const dispatch = useAppDispatch();

    function handleOrder() {
        appModalMode(true);
        dispatch(ORDER_MODAL(true));
    }

    function handleEdit() {
        window.location.href = '/my-lists/bookmark/edit';
    }

    return (
        <div className="style-wrapper-bookmark-detail">
            <div className="wrapper-groupcount-orderbox">
                <p className="txt-bookmarkgroup">
                    그룹 <span>{groupList?.length || 1}</span>
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
