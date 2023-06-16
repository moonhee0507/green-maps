import React from 'react';
import { TopBar } from '../../../../../components/topBar/topBar';
import { ReviewForm } from './ReviewForm/ReviewForm';
import { useCheckLoginStatus } from '../../../../../renderer/_hooks/useCheckLoginStatus';
import type { PageContext } from '../../../../../renderer/types';
import type { Restaurant } from '../../../../../server/models/Restaurant';

export const documentProps = {
    title: '채식 식당 리뷰 작성 | Green Maps',
    description: '채식 식당 리뷰 작성 페이지',
};

export { Page };

function Page(pageContext: PageContext) {
    const { _id, title } = pageContext.restaurantInfo as Restaurant;
    const [_, userInfo] = useCheckLoginStatus();

    return (
        <>
            <TopBar title="리뷰 작성" />
            <ReviewForm restaurantId={_id} title={title} userInfo={userInfo} />
        </>
    );
}
