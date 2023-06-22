import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

export { TextArea };

function TextArea(props: { content: string }) {
    const htmlString = props.content;

    return typeof window !== 'undefined' ? (
        <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlString) }}
            style={{ wordBreak: 'keep-all', marginTop: '40px' }}
        />
    ) : (
        <div style={{ wordBreak: 'keep-all', marginTop: '40px' }} />
    );
}
