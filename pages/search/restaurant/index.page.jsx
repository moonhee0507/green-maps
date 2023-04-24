import React from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { RestaurantDetail } from './RestaurantDetail/RestaurantDetail';

export { Page };

function Page(pageProps) {
    // TODO: 화면 구조 만들기(북마크, 인증여부, 좋아요, 후기, 카테고리별 이미지 만들기(카페, 식당))
    const restaurantInfo = pageProps.restaurantInfo;

    return (
        <>
            <TopBar title={'상세정보'} />
            <RestaurantDetail restaurantInfo={restaurantInfo} />
        </>
    );
}
