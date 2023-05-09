import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReviewButton } from './ReviewButton';
import { ReviewItem } from './ReviewItem';
import { Pagination } from '../../../../../components/Pagination/Pagination';
import type { Restaurant } from '../../../../../server/models/Restaurant';
import type { Review } from '../../../../../server/models/Review';
import type { ReviewPagination } from '../../../../../renderer/_reducers/_slices/paginationSlice';
import type { RootState } from '../../../../../renderer/store.js';

export { ReviewSection };

function ReviewSection(props: { restaurantInfo: Restaurant; reviews: Array<Review> }) {
    const { restaurantInfo, reviews } = props;
    const [objReview] = useState(() => {
        const reverseArr = [...props.reviews].reverse();
        const perPage = 3;

        const reviewPagination: ReviewPagination = {};

        for (let i = 0; i < Math.ceil(reverseArr.length / perPage); i++) {
            reviewPagination[i] = reverseArr.slice(i * perPage, i * perPage + perPage);
        }

        return reviewPagination;
    });

    const currentPage = useSelector((state: RootState) => state.paginationSlice.currentPage);

    const dispatch = useDispatch();

    useEffect(() => {
        paginate();
        function paginate() {
            const reverseArr = [...props.reviews].reverse();
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
            <h4>리뷰</h4>
            <ReviewButton restaurantId={restaurantInfo._id} />
            <div className="wrapper-review">
                {reviews.length > 0 ? (
                    objReview[currentPage - 1].map((review, i) => {
                        return <ReviewItem key={i} item={review} />;
                    })
                ) : (
                    <div>리뷰가 없습니다</div>
                )}
            </div>
            <Pagination count={reviews.length} perPage={3} />
        </section>
    );
}
