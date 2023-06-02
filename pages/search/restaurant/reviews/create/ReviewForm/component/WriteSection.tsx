import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

export { WriteSection };

function WriteSection({ title, content }: { title: string; content?: string }) {
    const dispatch = useDispatch();

    const [value, setValue] = useState<string>(() => {
        const editPage = window.location.pathname.includes('/edit');

        if (editPage) {
            dispatch({
                type: 'reviewSlice/TXT_REVIEW_STATE',
                CONTENT: content,
            });

            return content as string;
        } else {
            return '';
        }
    });

    function handleChange(event: ChangeEvent<{ value: string }>): void {
        setValue(event.currentTarget.value);

        dispatch({
            type: 'reviewSlice/TXT_REVIEW_STATE',
            CONTENT: event.currentTarget.value,
        });
    }

    return (
        <fieldset className="section-write-review">
            <legend className="sr-only">글 작성</legend>

            <label className="sr-only" htmlFor="restaurantInput">
                식당이름
            </label>
            <input type="text" value={title} id="restaurantInput" readOnly />

            <label htmlFor="txtReview" className="sr-only">
                리뷰 작성란
            </label>
            <textarea
                id="txtReview"
                placeholder={'채식에 대한 이야기를 자유롭게 공유해주세요.\n(10자이상 100자 이내)'}
                autoComplete="on"
                maxLength={100}
                minLength={10}
                required
                onChange={handleChange}
                value={value}
            />
        </fieldset>
    );
}
