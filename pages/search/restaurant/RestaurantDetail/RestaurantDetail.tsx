import React from 'react';
import { PrimarySection } from './PrimarySection/PrimarySection.js';
import { LocationSection } from './LocationSection';
import { ReviewSection } from './ReviewSection/ReviewSection.js';
import type { Restaurant } from '../../../../server/models/Restaurant';
import { Review } from '../../../../server/models/Review.js';

export { RestaurantDetail };

function RestaurantDetail({
    restaurantInfo,
    reviews,
    isLoggedIn,
}: {
    restaurantInfo: Restaurant;
    reviews: Array<Review>;
    isLoggedIn: boolean;
}) {
    return (
        <main className="wrapper-restaurant-detail">
            <PrimarySection restaurantInfo={restaurantInfo} isLoggedIn={isLoggedIn} />
            <LocationSection restaurantInfo={restaurantInfo} />
            <ReviewSection restaurantInfo={restaurantInfo} reviews={reviews} isLoggedIn={isLoggedIn} />
        </main>
    );
}
