import React, { useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';

export { PreviewText };

function PreviewText(props: { content: string; keyword?: string }) {
    const content = removeUnnecessaryString(props.content);
    const { keyword } = props;

    const [same, setSame] = useState<string>('');

    // content에 keyword와 일치하는 단어가 있으면 그 단어에 파란색 표시
    useEffect(() => {
        if (keyword && keyword !== '') {
            if (content.includes(keyword)) {
                const regex = new RegExp(keyword, 'gi');
                const replaceWord = content.replace(regex, `<span style="color: blue;">${keyword}</span>`);

                setSame(replaceWord);
            }
        }
    }, [content, same]);

    return (
        <>
            <dt className="sr-only">내용</dt>

            {keyword && keyword !== '' ? (
                <dd className="txt-postitem-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(same) }} />
            ) : (
                <dd className="txt-postitem-content">{content}</dd>
            )}
        </>
    );
}

/**
 * Tag와 &nbsp;같은 특수문자 제거 함수
 */
function removeUnnecessaryString(html: string): string {
    return html.replaceAll(/<[^>]*>/g, '').replaceAll(/&[a-zA-Z0-9]*;/g, '');
}
