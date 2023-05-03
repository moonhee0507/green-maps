import React from 'react';
import { TextArea } from './TextArea';

export { Content };

function Content() {
    return (
        <label className="label-create-post-content">
            <span className="sr-only">내용</span>
            <TextArea />
        </label>
    );
}
