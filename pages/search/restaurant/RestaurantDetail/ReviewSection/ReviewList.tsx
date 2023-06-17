import React from 'react';
import { ReviewListItem } from './ReviewListItem';
import type { Review } from '../../../../../server/models/Review';
import type { UserInfo } from '../../../../../server/models/User';

export { ReviewList };

function ReviewList({
    reviews,
    userInfo,
    restaurantId,
}: {
    reviews: Review[] | null;
    userInfo: UserInfo | null;
    restaurantId: string;
}) {
    return (
        <div className="wrapper-review">
            {reviews && reviews.length > 0 ? (
                <ul>
                    {reviews.map((review, i) => {
                        return (
                            <ReviewListItem
                                key={review._id}
                                item={review}
                                userInfo={userInfo}
                                restaurantId={restaurantId}
                                isFirst={i === 0}
                            />
                        );
                    })}
                </ul>
            ) : (
                <div className="style-wrapper-no-review">
                    <div className="txt-no-review">😭</div>
                    <p>리뷰가 아직 없어요.</p>
                </div>
            )}
        </div>
    );
}
