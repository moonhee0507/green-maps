import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { CommentPagination, SET_COMMENT } from '../../../renderer/_reducers/_slices/paginationSlice';
import { TopBar } from '../../../components/topBar/topBar';
import { ContentSection } from './ContentSection/ContentSection';
import { CommentSection } from './CommentSection/CommentSection';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { useCheckLoginStatus } from '../../../renderer/_hooks/useCheckLoginStatus';
import LoadingMain from '../../../components/Loading/LoadingMain';
import { Post } from '../../../server/models/Post';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import type { PageContext } from '../../../renderer/types';

export const documentProps = {
    title: '게시글 | Green Maps',
    description: '채식 식당 지도 서비스 게시글 페이지',
};

export { Page };

function Page(pageContext: PageContext) {
    // const postId = pageContext.routeParams?.postId || '';
    const { routeParams } = pageContext;

    const postId = routeParams?.postId || '';

    const dispatch = useAppDispatch();
    const [_, userInfo] = useCheckLoginStatus();

    const [postInfo, setPostInfo] = useState<Post | null>(null);

    useEffect(() => {
        getPostInfo().then((post) => {
            if (post) {
                setPostInfo(post);
            } else setPostInfo(null);
        });
    }, []);

    async function getPostInfo() {
        const res = await fetch(`${API_URL}/posts/${postId}`, {
            headers: {
                'Cache-Control': 'max-age=31536000',
            },
        });
        const data = (await res.json()) as Post;

        return data;
    }

    // 댓글 페이지 네이션을 위해 스토어에 저장
    useEffect(() => {
        if (postInfo) {
            if (postInfo.comments) {
                const obj: CommentPagination = {};
                // 10개(0~9번지)는 0번 키에 저장, (10~19번지)는 1번 키에 저장
                for (let i = 0; i < postInfo.comments.length; i = i + 10) {
                    const arrPerPage = postInfo.comments.slice(i, i + 10);
                    obj[i / 10] = arrPerPage;
                }

                dispatch(SET_COMMENT(obj));
            }
        }
    }, [postInfo]);

    return postInfo ? (
        <React.Suspense fallback={<LoadingMain />}>
            <TopBar title={postInfo.subject} />
            <main className="main-read-post">
                <ContentSection userInfo={userInfo} postInfo={postInfo} />
                {postInfo.subject !== '공지사항' && (
                    <CommentSection userInfo={userInfo} postId={postInfo._id} comments={postInfo.comments} />
                )}
            </main>
            <ModalGroup />
        </React.Suspense>
    ) : (
        <LoadingMain />
    );
}
