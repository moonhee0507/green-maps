import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

export { Title };

function Title() {
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'postSlice/TITLE_STATE', TITLE: event.target.value });
    }

    return (
        <label className="label-create-post-title">
            <span className="sr-only">제목</span>
            <input type="text" placeholder="제목" maxLength={30} onChange={handleChange} />
        </label>
    );
}
