import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { Create } from './component/Create';

export const documentProps = {
    title: '게시글 작성 | Green Maps',
    description: '게시글 작성 페이지',
};

export { Page };

function Page() {
    const [window, setWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindow(true);
        }
    }, []);
    return (
        <>
            <TopBar title="글 쓰기" />
            {window && <Create />}
        </>
    );
}
