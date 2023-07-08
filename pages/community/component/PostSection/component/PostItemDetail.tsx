import React from 'react';
import { CommentInPost } from '../../../../../server/models/Post';
import { isSameDay } from '../../../../../components/Date/isSameDay';
import { UserInfo } from '../../../../../server/models/User';

export { PostItemDetail };

function PostItemDetail({
    like,
    comments,
    registeredAt,
    owner,
}: {
    like?: Array<{ user: string }>;
    comments?: Array<CommentInPost>;
    registeredAt: string;
    owner: string | UserInfo;
}) {
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

function LikeCount({ like }: { like?: Array<{ user: string }> }) {
    return (
        <>
            <dt className="sr-only">좋아요 개수</dt>
            <dd className="container-count-like">
                <span>{like?.length || 0}</span>
            </dd>
        </>
    );
}

function CommentCount({ comments }: { comments?: Array<CommentInPost> }) {
    return (
        <>
            <dt className="sr-only">댓글 개수</dt>
            <dd className="container-count-comment">
                <span>{comments?.length || 0}</span>
            </dd>
        </>
    );
}

function Time({ registeredAt }: { registeredAt: string }) {
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

function Owner({ owner }: { owner: string | UserInfo }) {
    return (
        <>
            <dt className="sr-only">작성자</dt>
            <dd className="txt-post-owner">{typeof owner === 'string' ? owner : owner?.nickName}</dd>
        </>
    );
}
