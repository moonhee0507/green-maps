import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { CommentPagination, SET_COMMENT } from '../../../renderer/_reducers/_slices/paginationSlice';
import { TopBar } from '../../../components/topBar/topBar';
import { ContentSection } from './ContentSection/ContentSection';
import { CommentSection } from './CommentSection/CommentSection';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { API_URL } from '../../CONSTANT_URL';
import type { PageProps } from '../../../renderer/types';
import type { UserInfo } from '../../../server/models/User';

export { Page };

function Page(pageProps: PageProps) {
    const dispatch = useAppDispatch();
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    const postInfo = pageProps.postInfo;
    const { subject, content, like, owner, photo, registeredAt, comments, title, _id } = postInfo;

    useEffect(() => {
        getUserInfo().then((data) => {
            if (data.success) {
                setUserInfo(data.user);
            }
        });
    }, []);

    // 댓글 페이지 네이션을 위해 스토어에 저장
    useEffect(() => {
        const obj: CommentPagination = {};
        // 10개(0~9번지)는 0번 키에 저장, (10~19번지)는 1번 키에 저장
        for (let i = 0; i < comments.length; i = i + 10) {
            const arrPerPage = comments.slice(i, i + 10);
            obj[i / 10] = arrPerPage;
        }

        dispatch(SET_COMMENT(obj));
    }, [pageProps]);

    async function getUserInfo() {
        const res = await fetch(`${API_URL}/users`);
        const data = await res.json();

        return data;
    }

    return (
        <>
            <TopBar title={subject} />
            <main className="main-read-post">
                <ContentSection userInfo={userInfo} postInfo={postInfo} />
                <CommentSection userInfo={userInfo} postId={_id} comments={comments} />
            </main>
            <ModalGroup />
        </>
    );
}
