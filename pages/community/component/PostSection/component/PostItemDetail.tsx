import React from 'react';
import { CommentInPost } from '../../../../../server/models/Post';
import { isSameDay } from '../../../../../components/Date/isSameDay';

export { PostItemDetail };

function PostItemDetail(props: {
    like?: Array<{ user: string }>;
    comments?: Array<CommentInPost>;
    registeredAt: string;
    owner: string;
}) {
    const { like, comments, registeredAt, owner } = props;

    return (
        <>
            <dt className="sr-only">상세 내용</dt>
            <dd>
                <dl className="container-post-subinfo">
                    <LikeCount like={like} />
                    <CommentCount comments={comments} />
                    <Time registeredAt={registeredAt} />
                    <Owner owner={owner} />
                </dl>
            </dd>
        </>
    );
}

function LikeCount(props: { like?: Array<{ user: string }> }) {
    return (
        <>
            <dt className="sr-only">좋아요 개수</dt>
            <dd className="container-count-like">
                <span>{props.like?.length || 0}</span>
            </dd>
        </>
    );
}

function CommentCount(props: { comments?: Array<CommentInPost> }) {
    return (
        <>
            <dt className="sr-only">댓글 개수</dt>
            <dd className="container-count-comment">
                <span>{props.comments?.length || 0}</span>
            </dd>
        </>
    );
}

function Time(props: { registeredAt: string }) {
    const { registeredAt } = props;

    const date = isSameDay(registeredAt)
        ? `${registeredAt.split('. ').at(-1)?.split(':')[0]}:${registeredAt.split('. ').at(-1)?.split(':')[1]}`
        : registeredAt.slice(0, 13);

    return (
        <>
            <dt className="sr-only">작성 시간</dt>
            <dd className="container-post-time">
                <time dateTime="">{date}</time>
            </dd>
        </>
    );
}

function Owner(props: { owner: string }) {
    return (
        <>
            <dt className="sr-only">작성자</dt>
            <dd className="txt-post-owner">{props.owner}</dd>
        </>
    );
}
