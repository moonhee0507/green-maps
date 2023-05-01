import React from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { RestaurantDetail } from './RestaurantDetail/RestaurantDetail';
import { PageProps } from '../../../renderer/types';

export { Page };

function Page(pageProps: PageProps) {
    const restaurantInfo = pageProps.restaurantInfo;
    const reviews = pageProps.reviews.review;

    return (
        <>
            <TopBar title="상세정보" />
            <RestaurantDetail restaurantInfo={restaurantInfo} reviews={reviews} />
        </>
    );
}
