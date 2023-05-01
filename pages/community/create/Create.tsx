import React from 'react';
import { TextArea } from './TextArea';

export { Create };

function Create() {
    return (
        <main className="main-create-post">
            <form>
                <label htmlFor="postTitle" className="sr-only">
                    제목
                </label>
                <input id="postTitle" type="text" placeholder="제목"></input>
                <label htmlFor="postContent" className="sr-only">
                    내용
                </label>
                {/* <textarea
                    id="postContent"
                    placeholder="내용을 입력하세요."
                    autoComplete="on"
                    maxLength={100}
                    minLength={10}
                    required
                    style={{ resize: 'none', display: 'block', width: '100%', height: '100px' }}
                /> */}
                <TextArea />
            </form>
        </main>
    );
}
