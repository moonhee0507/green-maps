// import React from 'react';
// import DOMPurify from 'isomorphic-dompurify';

// export { TextArea };

// function TextArea(props: { content: string }) {
//     const htmlString = props.content;

//     return (
//         <div
//             dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlString) }}
//             style={{ wordBreak: 'keep-all', marginTop: '40px' }}
//         />
//     );
// }

import React, { useEffect, useState } from 'react';

export { TextArea };

function TextArea(props: { content: string }) {
    const [DOMPurify, setDOMPurify] = useState<any | null>(null);

    useEffect(() => {
        // 비동기적으로 DOMPurify 모듈을 가져옴
        import('isomorphic-dompurify').then((module) => {
            setDOMPurify(module.default);
        });
    }, []);

    if (!DOMPurify) {
        // DOMPurify가 아직 로드되지 않았을 경우 로딩 상태 또는 대체 컨텐츠를 반환할 수 있음
        return <div>Loading...</div>;
    }

    const htmlString = props.content;

    return (
        <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlString) }}
            style={{ wordBreak: 'keep-all', marginTop: '40px' }}
        />
    );
}
