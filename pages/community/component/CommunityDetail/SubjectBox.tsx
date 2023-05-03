import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

export { SubjectBox };

function SubjectBox(props: { from: string }) {
    const { from } = props;
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        dispatch({ type: 'postSlice/SUBJECT_STATE', SUBJECT: event.target.value });
    }

    return (
        <div className="wrapper-subject">
            <label htmlFor="select-subject" className={from === '글 쓰기' ? 'sr-only' : ''}>
                말머리 선택
            </label>
            <select name="subjects" id="select-subject" onChange={handleChange}>
                <option value="">{from === '글 쓰기' ? '말머리 선택' : '-- 전체 --'}</option>
                <option value="🥑채식얘기">🥑채식얘기</option>
                <option value="⚽운동얘기">⚽운동얘기</option>
            </select>
        </div>
    );
}
