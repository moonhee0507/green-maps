import React, { useEffect, useRef, useState } from 'react';
import { isSameDay } from '../../../../../components/Date/isSameDay';
import { MoreButton } from './MoreButton';
import type { UserInfo } from '../../../../../server/models/User';
import type { CommentInPost } from '../../../../../server/models/Post';
import { useAppSelector } from '../../../../../renderer/store/hooks';
import { API_URL } from '../../../../../renderer/CONSTANT_URL';

export { CommentList };

function CommentList({
    userInfo,
    postId,
    comments,
}: {
    userInfo: UserInfo | null;
    postId: string;
    comments?: Array<CommentInPost>;
}) {
    return comments && comments.length > 0 ? (
        <ul>
            {comments.map((comment, i) => {
                return (
                    <CommentListItem
                        key={i}
                        userInfo={userInfo}
                        postId={postId}
                        comment={comment}
                        isLast={i === comments.length - 1}
                    />
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
    postId,
    comment,
    isLast,
}: {
    userInfo: UserInfo | null;
    postId: string;
    comment: CommentInPost;
    isLast: boolean;
}) {
    const { owner, content, like, registeredAt, updatedAt } = comment;
    const editMode = useAppSelector((state) => state.postSlice.editCommentMode);

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
                    {editMode ? <TextareaForEdit content={content} /> : <dd className="txt-content">{content}</dd>}
                </dl>
            </dl>
            {editMode ? (
                <EditCommentButton postId={postId} commentId={comment._id} />
            ) : (
                <MoreButton userInfo={userInfo} postId={postId} comment={comment} />
            )}
        </li>
    );
}

function TextareaForEdit({ content }: { content: string }) {
    const [value, setValue] = useState<string>(content);

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value);
    }

    return <textarea id="editCommentTextarea" onChange={handleChange} minLength={1} maxLength={100} value={value} />;
}

function EditCommentButton({ postId, commentId }: { postId: string; commentId: string }) {
    function handleClick() {
        const textarea = document.getElementById('editCommentTextarea') as HTMLTextAreaElement;

        if (textarea !== null) {
            editComment(textarea.value);
        }
    }

    async function editComment(content: string) {
        const res = await fetch(`${API_URL}/comments/${commentId}?postId=${postId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: content }),
        });

        const data = await res.json();

        if (data.success) {
            alert('댓글이 수정되었습니다.');
        } else {
            alert('다시 시도해주세요.');
        }

        window.location.reload();
    }
    return (
        <button type="button" className="button-more commentitem edit" onClick={handleClick}>
            수정
        </button>
    );
}
