import React from 'react';
import { PrimarySection } from './PrimarySection/PrimarySection.js';
import { LocationSection } from './LocationSection';
import { ReviewSection } from './ReviewSection/ReviewSection.js';
import type { Restaurant } from '../../../../server/models/Restaurant';
import type { Review } from '../../../../server/models/Review.js';
import type { UserInfo } from '../../../../server/models/User.js';

export { RestaurantDetail };

function RestaurantDetail({
    restaurantInfo,
    isLoggedIn,
    userInfo,
}: {
    restaurantInfo: Restaurant;
    isLoggedIn: boolean;
    userInfo: UserInfo | null;
}) {
    return (
        <main className="wrapper-restaurant-detail">
            <PrimarySection restaurantInfo={restaurantInfo} isLoggedIn={isLoggedIn} />
            <LocationSection restaurantInfo={restaurantInfo} />
            <ReviewSection restaurantInfo={restaurantInfo} isLoggedIn={isLoggedIn} userInfo={userInfo} />
        </main>
    );
}
