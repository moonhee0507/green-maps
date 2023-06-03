import React from 'react';
import { Thumb } from './Thumb';
import { Distance } from '../../my-lists/bookmark/BookmarkListMain/BookmarkList/Distance';
import { __LI_WIDTH__, __BORDER__ } from './RestaurantList';
import type { Restaurant } from '../../../server/models/Restaurant';

export { RestaurantListItem };

function RestaurantListItem({ restaurantInfo }: { restaurantInfo: Restaurant }) {
    const { _id, category, title, address, rating, reviews, certification, location } = restaurantInfo;

    return (
        <li style={{ width: `${__LI_WIDTH__}px`, borderWidth: `${__BORDER__ / 2}px` }}>
            <a href={`/search/${_id}`}>
                <Thumb category={category} />
                <div className="container-right">
                    <dl>
                        {certification ? (
                            <dl>
                                <dt className="sr-only">채식 인증 내용</dt>
                                <dd className="txt-cert">{certification}</dd>
                            </dl>
                        ) : null}
                        <dl>
                            <dt className="sr-only">식당 이름</dt>
                            <dd className="txt-title">{title}</dd>
                        </dl>
                        <dl>
                            <dt className="sr-only">주소</dt>
                            <dd className="txt-address">{address}</dd>
                            <dt className="sr-only">거리</dt>
                            <dd>
                                <Distance location={location.coordinates} />
                            </dd>
                        </dl>

                        <dl className="container-rating-count">
                            <dt className="sr-only">평점</dt>
                            <dd className="txt-rating">{rating}</dd>
                            <dt className="sr-only">리뷰 수</dt>
                            <dd className="txt-count-comment">{reviews.length}</dd>
                        </dl>
                    </dl>
                </div>
            </a>
        </li>
    );
}
