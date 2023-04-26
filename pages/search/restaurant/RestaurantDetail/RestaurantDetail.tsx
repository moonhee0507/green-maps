import React from 'react';
import { PrimarySection } from './PrimarySection/PrimarySection.js';
import { LocationSection } from './LocationSection';
import { ReviewSection } from './ReviewSection';
import type { Restaurant } from '../../../../server/models/Restaurant';

export { RestaurantDetail };

function RestaurantDetail(props: { restaurantInfo: Restaurant }) {
    const restaurantInfo = props.restaurantInfo;

    return (
        <main className="wrapper-restaurant-detail">
            <PrimarySection restaurantInfo={restaurantInfo} />
            <LocationSection restaurantInfo={restaurantInfo} />
            <ReviewSection restaurantInfo={restaurantInfo} />
        </main>
    );
}
