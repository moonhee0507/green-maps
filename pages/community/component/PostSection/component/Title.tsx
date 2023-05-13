import React, { useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';

export { Title };

function Title(props: { title: string; keyword?: string }) {
    const { title, keyword } = props;

    const [same, setSame] = useState<string>('');

    // title에 keyword와 일치하는 단어가 있으면 그 단어에 파란색 표시
    useEffect(() => {
        if (keyword && keyword !== '') {
            if (title.includes(keyword)) {
                const regex = new RegExp(keyword, 'gi');
                const replaceWord = title.replace(regex, `<span style="color: blue;">${keyword}</span>`);

                setSame(replaceWord);
            }
        }
    }, [title, keyword]);

    return (
        <>
            <dt className="sr-only">제목</dt>
            {keyword && keyword !== '' ? (
                <dd className="txt-postitem-title" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(same) }} />
            ) : (
                <dd className="txt-postitem-title">{title}</dd>
            )}
        </>
    );
}
