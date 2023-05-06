import React from 'react';
import type { ReviewInPost } from '../../../../server/models/Post';

export { PostReviewItem };

function PostReviewItem(props: { review: ReviewInPost }) {
    const { owner, content, like, registeredAt, updatedAt } = props.review;

    return (
        <li>
            <dl>
                <dt className="sr-only">댓글 작성자</dt>
                <dd style={{ fontWeight: 'bold' }}>{owner}</dd>
                <dt className="sr-only">게시 시간</dt>
                <dd style={{ fontSize: '13px' }}>{registeredAt}</dd>
                <dt className="sr-only">댓글 내용</dt>
                <dd>{content}</dd>
            </dl>
        </li>
    );
}
