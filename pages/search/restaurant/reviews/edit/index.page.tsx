import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../../../components/topBar/topBar';
import { ReviewForm } from '../create/ReviewForm/ReviewForm';
import type { PageContext } from '../../../../../renderer/types';
import type { Restaurant } from '../../../../../server/models/Restaurant';
import { API_URL } from '../../../../../renderer/CONSTANT_URL';
import { Review } from '../../../../../server/models/Review';
import { useCheckLoginStatus } from '../../../../../renderer/_hooks/useCheckLoginStatus';
import LoadingMain from '../../../../../components/Loading/LoadingMain';

export const documentProps = {
    title: '리뷰 수정 | Green Maps',
    description: '채식 식당 리뷰 수정 페이지',
};

// const ReviewForm = React.lazy(() => import('../create/ReviewForm/ReviewForm'));
// const res = await fetch(`${API_URL}/reviews/${reviewId}`);
//     const data = (await res.json()) as { success: boolean; review: Review };
export { Page };

function Page(pageContext: PageContext) {
    // const { review, user } = pageContext.routeParams;
    const restaurantId = pageContext.routeParams?.restaurantId || '';
    const reviewId = pageContext.routeParams?.reviewId || '';

    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
    const [review, setReview] = useState<Review | null>(null);

    const [_, userInfo] = useCheckLoginStatus();

    useEffect(() => {
        getMyReview().then((data) => {
            if (data.success) {
                setReview(data.review);
                setRestaurant(typeof data.review.restaurant === 'object' ? data.review.restaurant : null);
            } else {
                setReview(null);
                setRestaurant(null);
            }
        });
    }, []);

    async function getMyReview() {
        const res = await fetch(`${API_URL}/reviews/${reviewId}`);
        const data = (await res.json()) as { success: boolean; review: Review };

        return data;
    }
    return (
        <React.Suspense fallback={<LoadingMain />}>
            <TopBar title="리뷰 수정" />
            {review && restaurant && (
                <ReviewForm
                    restaurantId={restaurantId}
                    reviewId={reviewId}
                    title={restaurant.title}
                    photos={review.photo}
                    content={review.content}
                    userInfo={userInfo}
                />
            )}
        </React.Suspense>
    );
}
