import React from 'react';

export { Content };

function Content(props: { content: string }) {
    const content = removeUnnecessaryString(props.content);

    return (
        <>
            <dt className="sr-only">내용</dt>
            <dd className="txt-postitem-content">{content}</dd>
        </>
    );
}

// Tag와 &nbsp;같은 특수문자 제거 함수
function removeUnnecessaryString(html: string): string {
    return html.replaceAll(/<[^>]*>/g, '').replaceAll(/&[a-zA-Z0-9]*;/g, '');
}
