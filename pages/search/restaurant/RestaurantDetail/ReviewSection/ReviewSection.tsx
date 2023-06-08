import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import { ReviewButton } from './ReviewButton';
import { ReviewList } from './ReviewList';
import { Pagination } from '../../../../../components/Pagination/Pagination';
import { API_URL } from '../../../../../renderer/CONSTANT_URL';
import type { Restaurant } from '../../../../../server/models/Restaurant';
import type { Review } from '../../../../../server/models/Review';
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

    const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
    const [totalReview, setTotalReview] = useState(0);
    const [reviewInPage, setReviewInPage] = useState<Review[] | null>(null);

    useEffect(() => {
        dispatch({ type: 'paginationSlice/CURRENT_PAGE', currentPage: 1 });
    }, [restaurantInfo]);

    const getTotalReview = useCallback(async () => {
        const res = await fetch(`${API_URL}/restaurants/${_id}/reviews`);
        const data = await res.json();

        return data;
    }, [restaurantInfo]);

    const getReviewInPage = useCallback(async () => {
        const res = await fetch(`${API_URL}/restaurants/${_id}?page=${currentPage}`);
        const data = await res.json();

        return data;
    }, [currentPage]);

    useEffect(() => {
        getTotalReview().then((data) => {
            if (data.success) {
                setTotalReview(data.reviews.total);
            }
        });

        getReviewInPage().then((data) => {
            if (data.success) {
                setReviewInPage(data.restaurantInfo.reviews);
            }
        });
    }, [restaurantInfo, currentPage]);

    return (
        <section className="section-review">
            <h4 className="sr-only">리뷰</h4>
            <ReviewButton restaurantId={_id} isLoggedIn={isLoggedIn} />
            <ReviewList reviews={reviewInPage} userInfo={userInfo} restaurantId={_id} />
            {reviews && reviews.length > 0 && <Pagination count={totalReview} perPage={5} />}
        </section>
    );
}
