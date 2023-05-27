import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReviewButton } from './ReviewButton';
import { ReviewItem } from './ReviewItem';
import { Pagination } from '../../../../../components/Pagination/Pagination';
import type { Restaurant } from '../../../../../server/models/Restaurant';
import type { Review } from '../../../../../server/models/Review';
import type { ReviewPagination } from '../../../../../renderer/_reducers/_slices/paginationSlice';
import { useAppSelector } from '../../../../../renderer/store/hooks';

export { ReviewSection };

function ReviewSection({
    restaurantInfo,
    reviews,
    isLoggedIn,
}: {
    restaurantInfo: Restaurant;
    reviews: Array<Review>;
    isLoggedIn: boolean;
}) {
    const [objReview] = useState(() => {
        const reverseArr = [...reviews].reverse();
        const perPage = 3;

        const reviewPagination: ReviewPagination = {};

        for (let i = 0; i < Math.ceil(reverseArr.length / perPage); i++) {
            reviewPagination[i] = reverseArr.slice(i * perPage, i * perPage + perPage);
        }

        return reviewPagination;
    });

    const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);

    const dispatch = useDispatch();

    useEffect(() => {
        paginate();
        function paginate() {
            const reverseArr = [...reviews].reverse();
            const perPage = 3;

            const reviewPagination: ReviewPagination = {};

            for (let i = 0; i < Math.ceil(reverseArr.length / perPage); i++) {
                reviewPagination[i] = reverseArr.slice(i * perPage, i * perPage + perPage);
            }

            dispatch({ type: 'paginationSlice/REVIEWS', reviews: reviewPagination });

            return reviewPagination;
        }
    }, []);

    return (
        <section className="section-review">
            <h4 className="sr-only">리뷰</h4>
            <ReviewButton restaurantId={restaurantInfo._id} isLoggedIn={isLoggedIn} />
            <div className="wrapper-review">
                {reviews.length > 0 ? (
                    objReview[currentPage - 1]?.map((review, i) => {
                        return <ReviewItem key={i} item={review} />;
                    })
                ) : (
                    <div className="style-wrapper-no-review">
                        <div className="txt-no-review">😭</div>
                        <p>리뷰가 아직 없어요.</p>
                    </div>
                )}
            </div>
            {reviews.length > 0 && <Pagination count={reviews.length} perPage={3} />}
        </section>
    );
}
