import React from 'react';
import { TextArea } from './TextArea';

export { Create };

function Create() {
    return (
        <main className="main-create-post">
            <form className="form-create-post">
                <label className="label-create-post-title">
                    <span className="sr-only">제목</span>
                    <input type="text" placeholder="제목" maxLength={30}></input>
                </label>
                <label className="label-create-post-content">
                    <span className="sr-only">내용</span>
                    <TextArea />
                </label>
            </form>
        </main>
    );
}
