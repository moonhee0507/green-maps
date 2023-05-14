import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

export { BoundaryBox };

function BoundaryBox() {
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        dispatch({
            type: 'postSlice/SEARCH_POOL',
            BOUNDARY: event.target.value,
        });
    }
    return (
        <>
            <label htmlFor="boundarySelect">범위</label>
            <select id="boundarySelect" onChange={handleChange}>
                <option value="tc">제목+내용</option>
                <option value="t">제목</option>
                <option value="c">내용</option>
                <option value="n">글작성자</option>
            </select>
        </>
    );
}
