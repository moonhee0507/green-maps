import React, { useEffect, useRef } from 'react';
import { isSameDay } from '../../../../../components/Date/isSameDay';
import { MoreButton } from './MoreButton';
import type { UserInfo } from '../../../../../server/models/User';
import type { CommentInPost } from '../../../../../server/models/Post';

export { CommentList };

function CommentList({ userInfo, comments }: { userInfo: UserInfo | null; comments?: Array<CommentInPost> }) {
    return comments && comments.length > 0 ? (
        <ul>
            {comments.map((comment, i) => {
                return (
                    <CommentListItem key={i} userInfo={userInfo} comment={comment} isLast={i === comments.length - 1} />
                );
            })}
        </ul>
    ) : (
        <div className="style-wrapper-no-review">
            <div className="txt-no-review">😭</div>
            <p>댓글이 없어요.</p>
        </div>
    );
}

function CommentListItem({
    userInfo,
    comment,
    isLast,
}: {
    userInfo: UserInfo | null;
    comment: CommentInPost;
    isLast: boolean;
}) {
    const { owner, content, like, registeredAt, updatedAt } = comment;

    const date = isSameDay(registeredAt)
        ? `${registeredAt.split('. ').at(-1)?.split(':')[0]}:${registeredAt.split('. ').at(-1)?.split(':')[1]}`
        : registeredAt.slice(0, 13);

    const listElement = useRef<HTMLLIElement>(null);

    useEffect(() => {
        if (isLast && listElement.current) {
            listElement.current.scrollIntoView(false);
        }
    }, [isLast]);

    return (
        <li className="li-commentitem" ref={listElement}>
            <dl className="wrapper-commentitem">
                <dl className="container-owner-date">
                    <dt className="sr-only">댓글 작성자</dt>
                    <dd className="txt-owner">{owner}</dd>
                    <dt className="sr-only">게시 시간</dt>
                    <dd className="txt-date">{date}</dd>
                </dl>
                <dl>
                    <dt className="sr-only">댓글 내용</dt>
                    <dd className="txt-content">{content}</dd>
                </dl>
            </dl>
            <MoreButton userInfo={userInfo} comment={comment} />
        </li>
    );
}
