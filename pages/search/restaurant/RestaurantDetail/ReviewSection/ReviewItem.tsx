import React from 'react';
import type { Review } from '../../../../../server/models/Review';
import { Owner, Date, Image, ReviewLikeButton, Content } from './component/index.js';

export { ReviewItem };

function ReviewItem({ item }: { item: Review }) {
    const { _id, owner, registeredAt, photo, content, like } = item;

    return (
        <article className="container-review">
            <h5 className="sr-only">개별 리뷰</h5>
            <dl>
                <div className="style-wrapper-reviewitem">
                    <Owner owner={owner} />
                    <Date registeredAt={registeredAt} />
                </div>
                {photo && photo.length > 0 ? <Image photoList={photo} /> : null}
                <div
                    className="style-wrapper-reviewitem"
                    style={photo && photo.length === 0 ? { paddingTop: '0' } : {}}
                >
                    <ReviewLikeButton reviewId={_id} like={like} />
                    <Content content={content} />
                </div>
            </dl>
        </article>
    );
}
