import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { WriteComment } from './WriteComment/WriteComment';
import { CommentList } from './CommentList/CommentList';
import { Pagination } from '../../../../components/Pagination/Pagination';
import { CommentPagination } from '../../../../renderer/_reducers/_slices/paginationSlice';
import type { CommentInPost } from '../../../../server/models/Post';
import { UserInfo } from '../../../../server/models/User';

export { CommentSection };

const perPage = 10;

function CommentSection({
    postId,
    comments,
    userInfo,
}: {
    postId: string;
    comments?: Array<CommentInPost>;
    userInfo: UserInfo | null;
}) {
    const dispatch = useAppDispatch();

    const paginatedComment = useAppSelector((state) => state.paginationSlice.comment) as CommentPagination;

    const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
    const [commentInPage, setCommentInPage] = useState(paginatedComment[currentPage - 1]);

    useEffect(() => {
        dispatch({ type: 'paginationSlice/CURRENT_PAGE', currentPage: Object.keys(paginatedComment).length });
    }, [paginatedComment]);

    useEffect(() => {
        setCommentInPage(paginatedComment[currentPage - 1]);
    }, [paginatedComment, currentPage]);

    return (
        <section className="section-post-comment">
            {comments && comments.length > 0 ? (
                <h3>
                    댓글 <span>({comments.length})</span>
                </h3>
            ) : (
                <h3 className="sr-only">댓글</h3>
            )}
            <WriteComment postId={postId} />
            <CommentList comments={commentInPage} userInfo={userInfo} />
            {comments && comments.length > perPage ? <Pagination count={comments.length} perPage={perPage} /> : null}
        </section>
    );
}
