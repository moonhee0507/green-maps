import React from 'react';
import { TextEditor } from './TextEditor';
import { Post } from '../../../../../server/models/Post';

export { Content };

function Content({ postInfo }: { postInfo?: Post | null }) {
    return (
        <label className="label-create-post-content">
            <span className="sr-only">내용</span>
            <TextEditor postInfo={postInfo} />
        </label>
    );
}
