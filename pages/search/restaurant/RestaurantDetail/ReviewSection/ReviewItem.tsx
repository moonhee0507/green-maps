import React from 'react';
import type { Review } from '../../../../../server/models/Review';
import { Owner, Date, Image, ReviewLikeButton, Content } from './component/index.js';

export { ReviewItem };

function ReviewItem(props: { item: Review }) {
    const { _id, owner, registeredAt, photo, content, like } = props.item;

    return (
        <article className="container-review">
            <h5 className="sr-only">개별 리뷰</h5>
            <dl>
                <Owner owner={owner} />
                <Date registeredAt={registeredAt} />
                {photo && <Image photoList={photo} />}
                <ReviewLikeButton reviewId={_id} like={like} />
                <Content content={content} />
            </dl>
        </article>
    );
}
