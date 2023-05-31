import React from 'react';
import type { Review } from '../../../../../server/models/Review';
import { Owner, Date, MoreButton, Image, ReviewLikeButton, Content } from './component/index.js';
import { UserInfo } from '../../../../../server/models/User';

export { ReviewItem };

function ReviewItem({
    item,
    userInfo,
    restaurantId,
}: {
    item: Review;
    userInfo: UserInfo | null;
    restaurantId: string;
}) {
    const { _id, owner, registeredAt, photo, content, like } = item;

    return (
        <article className="container-review">
            <h5 className="sr-only">개별 리뷰</h5>
            <dl>
                <div className="style-wrapper-reviewitem">
                    <Owner owner={owner} />
                    <Date registeredAt={registeredAt} />
                    <MoreButton userInfo={userInfo} owner={owner} reviewId={_id} restaurantId={restaurantId} />
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
