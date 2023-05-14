import React, { useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../renderer/store';

export { Title };

function Title(props: { title: string }) {
    const { title } = props;
    const keyword = useSelector((state: RootState) => state.postSlice.KEYWORD);

    const [decoTitle, setDecoTitle] = useState<string>(title);

    useEffect(() => {
        if (keyword && keyword !== '') {
            // 키워드에 문자가 있으면
            if (title.includes(keyword)) {
                // 제목에 키워드가 있으면
                const regex = new RegExp(keyword, 'gi');
                const replaceWord = title.replace(regex, `<span style="color: blue;">${keyword}</span>`);

                setDecoTitle(replaceWord);
            } else {
                setDecoTitle(title);
            }
        } else {
            setDecoTitle(title);
        }
    }, [title, keyword]);

    return (
        <>
            <dt className="sr-only">제목</dt>
            {keyword && keyword !== '' ? (
                <dd
                    className="txt-postitem-title"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(decoTitle) }}
                />
            ) : (
                <dd className="txt-postitem-title">{title}</dd>
            )}
        </>
    );
}
