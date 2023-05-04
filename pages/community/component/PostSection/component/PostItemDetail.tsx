import React from 'react';
import { ReviewInPost } from '../../../../../server/models/Post';

export { PostItemDetail };

function PostItemDetail(props: {
    like?: Array<{ user: string }>;
    reviews?: Array<ReviewInPost>;
    registeredAt: string;
    owner: string;
}) {
    const { like, reviews, registeredAt, owner } = props;

    return (
        <>
            <dt className="sr-only">상세 내용</dt>
            <dd>
                <dl className="container-post-subinfo">
                    <LikeCount like={like} />
                    <CommentCount reviews={reviews} />
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

function CommentCount(props: { reviews?: Array<ReviewInPost> }) {
    return (
        <>
            <dt className="sr-only">댓글 개수</dt>
            <dd className="container-count-comment">
                <span>{props.reviews?.length || 0}</span>
            </dd>
        </>
    );
}

function Time(props: { registeredAt: string }) {
    return (
        <>
            <dt className="sr-only">작성 시간</dt>
            <dd className="container-post-time">
                <time dateTime="">{props.registeredAt}</time>
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
