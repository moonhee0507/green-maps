import React, { useCallback, useEffect, useState } from 'react';
import { API_URL } from '../../API_URL/api';
import type { UserInfo } from '../../../server/models/User';
import type { Review } from '../../../server/models/Review';
import { ReviewItem } from '../../search/restaurant/RestaurantDetail/ReviewSection/ReviewItem';

export { MyReviewSection };

function MyReviewSection({ userInfo }: { userInfo: UserInfo }) {
    const { userId } = userInfo;

    const [reviews, setReviews] = useState<Review[] | null>(null);

    useEffect(() => {
        getMyReview(userId).then((data) => {
            if (data.success === true) {
                setReviews(data.reviews.reverse());
            } else {
                setReviews(null);
            }
        });
    }, []);

    async function getMyReview(userId: string) {
        const res = await fetch(`${API_URL}/reviews/my?owner=${userId}`);
        const data = await res.json();

        return data;
    }

    return (
        <section className="section-review">
            <h3 className="sr-only">식당 리뷰</h3>
            <div className="wrapper-review">
                {reviews !== null && reviews.length > 0 ? (
                    reviews.map((review) => <ReviewItem key={Math.random()} item={review} />)
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
