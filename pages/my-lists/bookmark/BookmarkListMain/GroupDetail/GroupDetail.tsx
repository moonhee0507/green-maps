import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import { MOVE_LIST_MODAL, ORDER_MODAL, SET_TARGET_GROUP } from '../../../../../renderer/_reducers/_slices/myListSlice';
import appModalMode from '../../../../../components/modal/appModalMode';
import type { Bookmark } from '../../../../../server/models/User';

export function GroupDetail({ lists, groupName }: { lists: Bookmark[]; groupName: string }) {
    /**
     * 북마크그룹 정렬 상태 재사용
     */
    const order = useAppSelector((state) => state.myListSlice.groupNameOrder);
    const dispatch = useAppDispatch();

    function handleOrder() {
        appModalMode(true);

        dispatch(ORDER_MODAL(true));
    }

    function handleEdit() {
        appModalMode(true);

        dispatch(MOVE_LIST_MODAL(true));
        dispatch(SET_TARGET_GROUP(groupName));
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
