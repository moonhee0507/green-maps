import React, { useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';

export { TextArea };

function TextArea(props: { content: string }) {
    const [hasWindow, setHasWindow] = useState(false);

    const htmlString = props.content;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true);
        } else setHasWindow(false);
    }, []);

    return hasWindow ? (
        <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlString) }}
            style={{ wordBreak: 'keep-all', marginTop: '40px' }}
        />
    ) : (
        <div>Load...</div>
    );
}
