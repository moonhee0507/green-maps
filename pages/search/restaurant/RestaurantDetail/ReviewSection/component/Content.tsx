import React from 'react';

export { Content };

function Content(props: { content: string }) {
    return (
        <>
            <dt className="sr-only">내용</dt>
            <dd className="txt-review-content">{props.content}</dd>
        </>
    );
}
