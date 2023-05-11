import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

export { SubjectBox };

function SubjectBox(props: { from: string }) {
    const { from } = props;
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        dispatch({ type: 'postSlice/SUBJECT_STATE', SUBJECT: event.target.value });

        // 말머리 변경 시 현재 페이지 초기화
        dispatch({
            type: 'postSlice/POST_IN_PAGE',
            TOTAL: 0, // 최상단에서 최종 결정됨
            CURRENT_PAGE: 1,
        });
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
