import React from 'react';
import { PrimarySection } from './PrimarySection/PrimarySection.js';
import { LocationSection } from './LocationSection';
import { ReviewSection } from './ReviewSection/ReviewSection.js';
import type { Restaurant } from '../../../../server/models/Restaurant';
import { Review } from '../../../../server/models/Review.js';

export { RestaurantDetail };

function RestaurantDetail(props: { restaurantInfo: Restaurant; reviews: Array<Review> }) {
    const restaurantInfo = props.restaurantInfo;
    const reviews = props.reviews;

    return (
        <main className="wrapper-restaurant-detail">
            <PrimarySection restaurantInfo={restaurantInfo} />
            <LocationSection restaurantInfo={restaurantInfo} />
            <ReviewSection restaurantInfo={restaurantInfo} reviews={reviews} />
        </main>
    );
}
