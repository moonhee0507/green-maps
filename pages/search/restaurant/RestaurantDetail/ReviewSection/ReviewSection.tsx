import React, { useEffect, useState } from 'react';
import { Restaurant } from '../../../../../server/models/Restaurant';
import { ReviewButton } from './ReviewButton';
import { ReviewItem } from './ReviewItem';
import type { Review } from '../../../../../server/models/Review';

export { ReviewSection };

function ReviewSection(props: { restaurantInfo: Restaurant; reviews: Array<Review> }) {
    return (
        <>
            <ReviewButton restaurantId={props.restaurantInfo._id} />
            {props.reviews.length > 0 ? (
                props.reviews.map((review, i) => {
                    return <ReviewItem key={i} item={review} />;
                })
            ) : (
                <div>리뷰가 없습니다</div>
            )}
        </>
    );
}
