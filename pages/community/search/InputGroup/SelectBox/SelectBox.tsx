import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

export { SelectBox };

function SelectBox() {
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        dispatch({ type: 'postSlice/SUBJECT_STATE', SUBJECT: event?.target.value });
    }

    return (
        <div className="container-search-select">
            <label htmlFor="communitySearchSelect" className="sr-only">
                말머리 선택
            </label>
            <select name="subjects" id="communitySearchSelect" onChange={handleChange}>
                <option value="">전체 게시판</option>
                <option value="🥑채식얘기">🥑채식얘기</option>
                <option value="⚽운동얘기">⚽운동얘기</option>
            </select>
        </div>
    );
}
