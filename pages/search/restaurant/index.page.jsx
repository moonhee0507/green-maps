import React from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { RestaurantDetail } from './RestaurantDetail/RestaurantDetail';

export { Page };

function Page(pageProps) {
    const restaurantInfo = pageProps.restaurantInfo;
    const reviews = pageProps.reviews.review;

    return (
        <>
            <TopBar title={'상세정보'} />
            <RestaurantDetail restaurantInfo={restaurantInfo} reviews={reviews} />
        </>
    );
}
