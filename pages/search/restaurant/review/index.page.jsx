import React from 'react';
import { TopBar } from '../../../../components/topBar/topBar';
import { ReviewForm } from './ReviewForm/ReviewForm';

export { Page };

function Page(pageProps) {
    const { _id, title } = pageProps.restaurantInfo;

    return (
        <>
            <TopBar title="리뷰 작성" />
            <ReviewForm restaurantId={_id} title={title} />
        </>
    );
}
