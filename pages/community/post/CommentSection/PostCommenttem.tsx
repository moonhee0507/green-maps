import React from 'react';
import type { CommentInPost } from '../../../../server/models/Post';
import { isSameDay } from '../../../../components/Date';

export { PostCommentItem };

function PostCommentItem(props: { review: CommentInPost }) {
    const { owner, content, like, registeredAt, updatedAt } = props.review;

    const date = isSameDay(registeredAt)
        ? `${registeredAt.split('. ').at(-1)?.split(':')[0]}:${registeredAt.split('. ').at(-1)?.split(':')[1]}`
        : registeredAt.slice(0, 13);

    return (
        <li>
            <dl>
                <dt className="sr-only">댓글 작성자</dt>
                <dd style={{ fontWeight: 'bold' }}>{owner}</dd>
                <dt className="sr-only">게시 시간</dt>
                <dd style={{ fontSize: '13px' }}>{date}</dd>
                <dt className="sr-only">댓글 내용</dt>
                <dd>{content}</dd>
            </dl>
        </li>
    );
}