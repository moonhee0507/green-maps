import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

export { OrderByBox };

function OrderByBox() {
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        dispatch({
            type: 'postSlice/SEARCH_ORDER',
            ORDERBY: event.target.value,
        });
    }
    return (
        <>
            <label htmlFor="orderBySelect">정렬</label>
            <select id="orderBySelect" onChange={handleChange} className="select-community-search">
                <option value="latest">최신순</option>
                <option value="accuracy">정확도</option>
                <option value="comment">댓글</option>
            </select>
        </>
    );
}
