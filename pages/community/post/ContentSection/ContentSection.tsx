import React from 'react';
import { TextArea } from './TextArea/TextArea';
import type { Post, ReviewInPost } from '../../../../server/models/Post';
import { PostLikeButton } from './PostLikeButton';

export { ContentSection };

function ContentSection(props: { postInfo: Post }) {
    const { subject, content, like, owner, photo, registeredAt, reviews, title, _id } = props.postInfo;

    return (
        <section className="section-post-content">
            <h3 aria-label="게시글 제목" className="txt-post-title">
                {title}
            </h3>
            <div>
                <p aria-label="작성자" className="txt-post-owner">
                    {owner}
                </p>
                <div className="container-post-subinfo">
                    <LikeCount like={like} />
                    <CommentCount reviews={reviews} />
                    <Time registeredAt={registeredAt} />
                </div>
            </div>
            <TextArea content={content} />
            <PostLikeButton postId={_id} like={like} />
        </section>
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
