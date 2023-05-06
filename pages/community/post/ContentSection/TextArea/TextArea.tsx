import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

export { TextArea };

function TextArea(props: { content: string }) {
    const htmlString = props.content;

    return (
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlString) }} style={{ wordBreak: 'keep-all' }} />
    );
}
