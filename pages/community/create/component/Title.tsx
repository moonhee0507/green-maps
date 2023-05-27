import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../renderer/store/hooks';
import type { Post } from '../../../../server/models/Post';

export { Title };

function Title({ postInfo }: { postInfo?: Post | null }) {
    const dispatch = useDispatch();

    const title = useAppSelector((state) => state.postSlice.TITLE);

    useEffect(() => {
        if (postInfo !== null && postInfo !== undefined) {
            dispatch({ type: 'postSlice/TITLE_STATE', TITLE: postInfo.title });
        } else {
            dispatch({ type: 'postSlice/TITLE_STATE', TITLE: '' });
        }
    }, [postInfo]);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'postSlice/TITLE_STATE', TITLE: event.target.value });
    }

    return (
        <label className="label-create-post-title">
            <span className="sr-only">제목</span>
            <input type="text" placeholder="제목" maxLength={30} onChange={handleChange} value={title} />
        </label>
    );
}
