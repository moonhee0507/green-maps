import React, { useEffect, useState } from 'react';
import { TextArea } from './TextArea/TextArea';
import type { Post, CommentInPost } from '../../../../server/models/Post';
import { PostLikeButton } from './PostLikeButton';
import { isSameDay } from '../../../../components/Date/isSameDay';
import { MoreButton } from './MoreButton';
import { UserInfo } from '../../../../server/models/User';

export { ContentSection };

function ContentSection({ userInfo, postInfo }: { userInfo: UserInfo | null; postInfo: Post }) {
    const { subject, content, like, owner, photo, registeredAt, comments, title, _id } = postInfo;

    const [nickname, setNickname] = useState<string>('');

    useEffect(() => {
        if (typeof owner !== 'undefined' && typeof owner.user_id === 'object') {
            setNickname(owner.user_id.nickName);
        }
    }, [owner]);

    return (
        <section className="section-post-content">
            <h3 aria-label="게시글 제목" className="txt-post-title">
                {title}
            </h3>
            <div>
                <p aria-label="작성자" className="txt-post-owner">
                    {nickname}
                </p>
                <div className="container-post-subinfo">
                    <LikeCount like={like} />
                    <CommentCount comments={comments} />
                    <Time registeredAt={registeredAt} />
                </div>
            </div>
            <TextArea content={content} />
            <PostLikeButton postId={_id} like={like} />
            <MoreButton userInfo={userInfo} owner={nickname} postId={_id} />
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
