import React from 'react';
import { TopBar } from '../../../../../components/topBar/topBar';
import { ReviewForm } from './ReviewForm/ReviewForm';
import type { PageContext } from '../../../../../renderer/types';
import type { Restaurant } from '../../../../../server/models/Restaurant';

export { Page };

function Page(pageContext: PageContext) {
    const { _id, title } = pageContext.restaurantInfo as Restaurant;

    return (
        <>
            <TopBar title="리뷰 작성" />
            <ReviewForm restaurantId={_id} title={title} />
        </>
    );
}
