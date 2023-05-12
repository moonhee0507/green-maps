import React from 'react';
import { TextEditor } from './TextEditor';

export { Content };

function Content() {
    return (
        <label className="label-create-post-content">
            <span className="sr-only">내용</span>
            <TextEditor />
        </label>
    );
}
