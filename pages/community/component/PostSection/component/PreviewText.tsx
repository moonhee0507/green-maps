import React, { useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../renderer/store';

export { PreviewText };

function PreviewText(props: { content: string }) {
    const { content } = props;
    const keyword = useSelector((state: RootState) => state.postSlice.KEYWORD);

    const [decoContent, setDecoContent] = useState<string>(content);

    useEffect(() => {
        if (keyword && keyword !== '') {
            if (content.includes(keyword)) {
                const regex = new RegExp(keyword, 'gi');
                const replaceWord = content.replace(regex, `<span style="color: blue;">${keyword}</span>`);

                setDecoContent(replaceWord);
            } else {
                setDecoContent(content); // 검색 할때마다 새롭게 그려야 하기 때문에 초기화 해줘야 함
            }
        } else {
            setDecoContent(content);
        }
    }, [content, keyword]);

    return (
        <>
            <dt className="sr-only">내용</dt>
            {keyword && keyword !== '' ? (
                <dd
                    className="txt-postitem-content"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(decoContent) }}
                />
            ) : (
                <dd className="txt-postitem-content">{content}</dd>
            )}
        </>
    );
}
