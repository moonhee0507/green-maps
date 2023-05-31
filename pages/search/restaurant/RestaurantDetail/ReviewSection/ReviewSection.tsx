import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import { ReviewButton } from './ReviewButton';
import { ReviewItem } from './ReviewItem';
import { Pagination } from '../../../../../components/Pagination/Pagination';
import type { Restaurant } from '../../../../../server/models/Restaurant';
import type { Review } from '../../../../../server/models/Review';
import type { ReviewPagination } from '../../../../../renderer/_reducers/_slices/paginationSlice';
import type { UserInfo } from '../../../../../server/models/User';

export { ReviewSection };

function ReviewSection({
    restaurantInfo,
    isLoggedIn,
    userInfo,
}: {
    restaurantInfo: Restaurant;
    isLoggedIn: boolean;
    userInfo: UserInfo | null;
}) {
    const { _id, reviews } = restaurantInfo;

    const dispatch = useAppDispatch();

    const paginatedReview = useAppSelector((state) => state.paginationSlice.review) as ReviewPagination;

    const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
    const [reviewInPage, setReviewInPage] = useState(paginatedReview[currentPage - 1]);

    useEffect(() => {
        dispatch({ type: 'paginationSlice/CURRENT_PAGE', currentPage: 1 });
    }, [paginatedReview]);

    useEffect(() => {
        setReviewInPage(paginatedReview[currentPage - 1]);
    }, [paginatedReview, currentPage]);

    return (
        <section className="section-review">
            <h4 className="sr-only">리뷰</h4>
            <ReviewButton restaurantId={_id} isLoggedIn={isLoggedIn} />
            <ReviewList reviews={reviewInPage} userInfo={userInfo} restaurantId={_id} />
            {reviews.length > 0 && <Pagination count={reviews.length} perPage={5} />}
        </section>
    );
}

function ReviewList({
    reviews,
    userInfo,
    restaurantId,
}: {
    reviews: Review[];
    userInfo: UserInfo | null;
    restaurantId: string;
}) {
    return (
        <div className="wrapper-review">
            {reviews && reviews.length > 0 ? (
                reviews.map((review, i) => {
                    return <ReviewItem key={i} item={review} userInfo={userInfo} restaurantId={restaurantId} />;
                })
            ) : (
                <div className="style-wrapper-no-review">
                    <div className="txt-no-review">😭</div>
                    <p>리뷰가 아직 없어요.</p>
                </div>
            )}
        </div>
    );
}
