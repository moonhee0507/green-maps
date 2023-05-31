import React from 'react';
import { TopBar } from '../../../../../components/topBar/topBar';
import { ReviewForm } from '../create/ReviewForm/ReviewForm';
import type { PageContext } from '../../../../../renderer/types';
import type { Restaurant } from '../../../../../server/models/Restaurant';

export { Page };

function Page(pageContext: PageContext) {
    const { review } = pageContext;

    return (
        <>
            <TopBar title="리뷰 수정" />
            <ReviewForm
                restaurantId={(review.restaurant as Restaurant)._id}
                title={(review.restaurant as Restaurant).title}
            />
        </>
    );
}
