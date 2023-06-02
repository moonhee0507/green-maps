import React, { useEffect, useState } from 'react';
import { ReviewListItem } from '../../search/restaurant/RestaurantDetail/ReviewSection/ReviewListItem';
import type { UserInfo } from '../../../server/models/User';
import type { Review } from '../../../server/models/Review';

export { MyReviewSection };

function MyReviewSection({ userInfo, reviews }: { userInfo: UserInfo; reviews: Review[] }) {
    const [restaurantId, setRestaurantId] = useState<string>('');

    useEffect(() => {
        if (reviews && reviews.length > 0) {
            reviews.forEach((review) => {
                if (typeof review.restaurant === 'string') {
                    setRestaurantId(review.restaurant);
                } else {
                    setRestaurantId(review.restaurant._id);
                }
            });
        }
    }, [reviews]);

    return (
        <section className="section-review">
            <h3 className="sr-only">식당 리뷰</h3>
            <div className="wrapper-review">
                {reviews && reviews.length > 0 ? (
                    reviews.map((review, i) => (
                        <ReviewListItem
                            key={Math.random()}
                            item={review}
                            userInfo={userInfo}
                            restaurantId={restaurantId}
                            isFirst={i === 0}
                        />
                    ))
                ) : (
                    <div className="style-wrapper-no-review">
                        <div className="txt-no-review">😭</div>
                        <p>리뷰가 아직 없어요.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
