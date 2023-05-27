import React, { useState } from 'react';
import { SubmitButton } from './SubmitButton';

export { WriteComment };

function WriteComment({ postId }: { postId: string }) {
    const [content, setContent] = useState<string | null>(null);

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value);
    }

    return (
        <form className="form-create-comment">
            <label htmlFor="comment" className="sr-only">
                댓글 작성하기
            </label>
            <textarea id="comment" onChange={handleChange} minLength={1} maxLength={100} />
            <SubmitButton postId={postId} content={content} />
        </form>
    );
}
