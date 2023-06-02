import React from 'react';
import { PictureSection } from './component/PictureSection';
import { WriteSection } from './component/WriteSection';
import { SubmitButton } from './component/SubmitButton';
import type { PhotoInReview } from '../../../../../../server/models/Review';
import type { UserInfo } from '../../../../../../server/models/User';

export { ReviewForm };

function ReviewForm({
    restaurantId,
    reviewId,
    title,
    photos,
    content,
    userInfo,
}: {
    restaurantId: string;
    reviewId?: string;
    title: string;
    photos?: PhotoInReview;
    content?: string;
    userInfo: UserInfo | null;
}) {
    return (
        <main className="wrapper-review">
            <form>
                <PictureSection photos={photos} />
                <WriteSection title={title} content={content} />
                <SubmitButton restaurantId={restaurantId} reviewId={reviewId} userInfo={userInfo} />
            </form>
        </main>
    );
}
