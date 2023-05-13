import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { PageContext, PageProps } from '../../../renderer/types';
// import { Create } from './component/Create';

export { Page };

function Page(pageProps: PageProps) {
    const postInfo = pageProps.postInfo;
    const [window, setWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindow(true);
        }
    }, []);
    return (
        <>
            <TopBar title="검색 결과" />
            {/* {window && <Create />} */}
            {window && <div>검색결과 페이지</div>}
        </>
    );
}
