import React from 'react';

export { PreviewText };

function PreviewText(props: { content: string }) {
    const content = removeUnnecessaryString(props.content);

    return (
        <>
            <dt className="sr-only">내용</dt>
            <dd className="txt-postitem-content">{content}</dd>
        </>
    );
}

/**
 * Tag와 &nbsp;같은 특수문자 제거 함수
 */
function removeUnnecessaryString(html: string): string {
    return html.replaceAll(/<[^>]*>/g, '').replaceAll(/&[a-zA-Z0-9]*;/g, '');
}
