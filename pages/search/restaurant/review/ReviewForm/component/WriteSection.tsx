import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

export { WriteSection };

function WriteSection(props: { title: string }) {
    const dispatch = useDispatch();
    function handleChange(event: ChangeEvent<{ value: string }>): string {
        dispatch({
            type: 'reviewSlice/TXT_REVIEW_STATE',
            CONTENT: event.currentTarget.value,
        });

        return event.currentTarget.value;
    }

    return (
        <fieldset className="section-write-review">
            <legend className="sr-only">글 작성</legend>

            <label className="sr-only">식당이름</label>
            <input type="text" value={props.title} readOnly />

            <label htmlFor="txtReview" className="sr-only">
                리뷰 작성란
            </label>
            <textarea
                id="txtReview"
                placeholder="채식에 대한 이야기를 자유롭게 공유해주세요."
                autoComplete="on"
                maxLength={100}
                minLength={10}
                required
                style={{ resize: 'none', display: 'block', width: '100%', height: '100px' }}
                onChange={handleChange}
            />
        </fieldset>
    );
}
