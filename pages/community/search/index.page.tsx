import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { InputGroup } from './InputGroup/InputGroup';
import { ResultSection } from './ResultSection/ResultSection';
import type { PageProps } from '../../../renderer/types';
import type { PostProps } from '../Community';

export { Page };

function Page(pageProps: PageProps) {
    const keyword = pageProps.routeParams?.keyword;
    const postInfo: PostProps = pageProps.postInfo;
    const [window, setWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindow(true);
        }
    }, []);

    if (!window) {
        return <Loading />;
    }

    return (
        <>
            <TopBar title="검색 결과" />
            {window && <SearchMain keyword={keyword || ''} postInfo={postInfo} />}
        </>
    );
}

function SearchMain(props: { keyword: string; postInfo: PostProps }) {
    const { keyword, postInfo } = props;

    return (
        <main className="community-search-main">
            <InputGroup keyword={keyword} />
            <ResultSection postInfo={postInfo} />
        </main>
    );
}

function Loading() {
    return <div>검색결과 로드 중...</div>;
}
