import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../../../components/topBar/topBar';
import { ReviewForm } from '../create/ReviewForm/ReviewForm';
import type { PageContext } from '../../../../../renderer/types';
import type { Restaurant } from '../../../../../server/models/Restaurant';

export const documentProps = {
    title: '리뷰 수정 | Green Maps',
    description: '채식 식당 리뷰 수정 페이지',
};

export { Page };

function Page(pageContext: PageContext) {
    const { review, user } = pageContext;

    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

    useEffect(() => {
        console.log('pageContext', pageContext);

        if (review) {
            if (typeof review.restaurant !== 'string') {
                setRestaurant(review.restaurant);
            } else {
                setRestaurant(null);
            }
        } else {
            setRestaurant(null);
        }
    }, [pageContext]);

    return (
        <>
            <TopBar title="리뷰 수정" />
            {restaurant !== null && typeof restaurant !== 'string' && review ? (
                <ReviewForm
                    restaurantId={restaurant._id}
                    reviewId={review._id}
                    title={restaurant.title}
                    photos={review.photo}
                    content={review.content}
                    userInfo={user.info}
                />
            ) : null}
        </>
    );
}
