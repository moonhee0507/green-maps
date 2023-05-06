import React, { ChangeEvent, useState } from 'react';
import type { ReviewInPost } from '../../../../server/models/Post';
import { PostReviewItem } from './PostReviewItem';
import { SubmitButton } from './SubmitButton';

export { CommentSection };

function CommentSection(props: { postId: string; reviews?: Array<ReviewInPost> }) {
    const { postId, reviews } = props;
    const [content, setContent] = useState<string | null>(null);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value);
    }

    return (
        <section style={{ border: '1px solid blue' }} className="section-post-comment">
            <h3>댓글</h3>

            <form className="form-create-comment">
                <label htmlFor="comment" className="sr-only">
                    댓글 작성하기
                </label>
                <textarea id="comment" onChange={handleChange} />
                <SubmitButton postId={postId} content={content} />
            </form>

            {reviews && reviews.length > 0 ? (
                reviews.map((review, i) => {
                    return <PostReviewItem key={i} review={review} />;
                })
            ) : (
                <p style={{ textAlign: 'center' }}>댓글이 없습니다.</p>
            )}
        </section>
    );
}
