import React, { useEffect, useRef, useState } from 'react';
import { Owner, Date, MoreButton, Image, ReviewLikeButton, Content } from './component/index.js';
import { useAppSelector } from '../../../../../renderer/store/hooks.js';
import type { Review } from '../../../../../server/models/Review';
import type { UserInfo } from '../../../../../server/models/User';

export { ReviewListItem };

function ReviewListItem({
    item,
    userInfo,
    restaurantId,
    isFirst,
}: {
    item: Review;
    userInfo: UserInfo | null;
    restaurantId: string;
    isFirst: boolean;
}) {
    const { _id, owner, registeredAt, photo, content, like, restaurant } = item;
    const [myPage] = useState(window.location.pathname === '/my');

    const listElement = useRef<HTMLLIElement>(null);
    const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);

    useEffect(() => {
        if (isFirst && listElement.current) {
            if (currentPage !== 1) {
                listElement.current.scrollIntoView({ block: 'center' });
            }
        }
    }, [currentPage]);

    return (
        <li ref={listElement} className="list-review">
            {myPage ? (
                <p className="txt-restaurant-in-my">
                    <em>{typeof restaurant !== 'string' ? restaurant.title : ''}</em>에 작성한 리뷰입니다.
                </p>
            ) : null}
            <article className="container-reviewitem">
                <h5 className="sr-only">개별 리뷰</h5>
                <dl>
                    <div className="style-wrapper-reviewitem">
                        <Owner owner={owner} />
                        <Date registeredAt={registeredAt} />
                        <MoreButton userInfo={userInfo} owner={owner} reviewId={_id} restaurantId={restaurantId} />
                    </div>
                    {photo && photo.length > 0 ? (
                        <>
                            <Image photoList={photo} />
                            <div className="style-wrapper-reviewitem">
                                <ButtonGroup reviewId={_id} like={like || []} />
                                <Content content={content} />
                            </div>
                        </>
                    ) : (
                        <div className="style-wrapper-reviewitem only-text">
                            <Content content={content} />
                            <ButtonGroup reviewId={_id} like={like || []} />
                        </div>
                    )}
                </dl>
            </article>
        </li>
    );
}

function ButtonGroup({ reviewId, like }: { reviewId: string; like: Array<{ user: string }> }) {
    return (
        <dl className="container-like-comment">
            <ReviewLikeButton reviewId={reviewId} like={like} />
            <ReviewCommentButton />
        </dl>
    );
}

function ReviewCommentButton() {
    const handleClick = () => {
        window.alert('준비 중인 서비스입니다.');
    };

    return (
        <>
            <dt className="sr-only">댓글</dt>
            <dd className="container-button-txt">
                <button
                    type="button"
                    aria-label="리뷰 댓글 쓰기"
                    className="button-review-comment"
                    onClick={handleClick}
                />
                <span aria-label="댓글 개수">0</span>
            </dd>
        </>
    );
}
