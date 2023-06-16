import React, { useCallback, useEffect, useState } from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import type { PageProps } from '../../../renderer/types';
import type { RootState } from '../../../renderer/store';
import type { Post } from '../../../server/models/Post';
import LoadingMain from '../../../components/Loading/LoadingMain';

const SearchMain = React.lazy(() => import('./SearchMain'));

export { Page };

function Page(pageProps: PageProps) {
    const dispatch = useDispatch();
    dispatch({
        type: 'postSlice/SEARCH',
        KEYWORD: pageProps.routeParams?.keyword || '',
    });

    const [posts, setPosts] = useState<Post[]>([]); // 초기값: keyword를 포함하는 게시물
    const [window, setWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindow(true);
            setPosts(pageProps.postInfo.lists);
        }
    }, []);

    // 현재 페이지, 말머리, 범위, 정렬이 변경되면 새 게시물 가져오기
    const keyword = useSelector((state: RootState) => state.postSlice.KEYWORD);
    const subject = useSelector((state: RootState) => state.postSlice.SUBJECT);
    const currentPage = useSelector((state: RootState) => state.postSlice.post.CURRENT_PAGE);
    const boundary = useSelector((state: RootState) => state.postSlice.BOUNDARY);
    const orderBy = useSelector((state: RootState) => state.postSlice.ORDERBY);
    const limit = 20;

    const getPosts = useCallback(async () => {
        try {
            const res = await fetch(
                `${API_URL}/posts?keyword=${keyword}&subject=${encodeURIComponent(
                    subject
                )}&page=${currentPage}&limit=${limit}&boundary=${boundary}&orderby=${orderBy}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const data = await res.json();

            return data;
        } catch (err) {
            console.error(err);
        }
    }, [keyword, subject, currentPage, boundary, orderBy]);

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data.currentPage === 1 ? data.lists : [...posts, ...data.lists]);

            dispatch({
                type: 'postSlice/POST_IN_PAGE',
                TOTAL: data.total,
                CURRENT_PAGE: data.currentPage,
            });
        });
    }, [getPosts]);

    return window ? (
        <React.Suspense fallback={<LoadingMain />}>
            <TopBar title="검색 결과" />
            <SearchMain posts={posts} limit={limit} />
        </React.Suspense>
    ) : (
        <LoadingMain />
    );
}
