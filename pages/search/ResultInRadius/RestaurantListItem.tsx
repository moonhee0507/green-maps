import React, { useEffect, useRef, useState } from 'react';
import { Thumb } from './Thumb';
import { DistanceContainer } from './DistanceContainer';
import { __LI_WIDTH__, __BORDER__ } from './RestaurantList';
import { navigate } from 'vite-plugin-ssr/client/router';
import type { Restaurant } from '../../../server/models/Restaurant';

export { RestaurantListItem };

function RestaurantListItem({ restaurantInfo, isFirst }: { restaurantInfo: Restaurant; isFirst?: boolean }) {
    const { _id, category, title, address, rating, reviews, certification, location } = restaurantInfo;
    const [newRating, setNewRating] = useState(rating);

    const liElement = useRef<HTMLLIElement>(null);

    useEffect(() => {
        if (typeof rating === 'number') {
            setNewRating(rating.toFixed(1));
        }
    }, []);

    useEffect(() => {
        if (isFirst && liElement.current) {
            liElement.current.scrollIntoView(true);
        }
    }, [isFirst]);

    return (
        <li style={{ width: `${__LI_WIDTH__}px`, borderWidth: `${__BORDER__ / 2}px` }} ref={liElement}>
            <div onClick={() => navigate(`/search/${_id}`)}>
                <Thumb category={category} />
                <DistanceContainer location={location.coordinates} />
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
                            <dt className="sr-only">업종</dt>
                            <dd className="txt-category">{category}</dd>
                        </dl>
                        <dl>
                            <dt className="sr-only">주소</dt>
                            <dd className="txt-address">{address}</dd>
                        </dl>

                        <dl className="container-rating-count">
                            <dt className="sr-only">평점</dt>
                            <dd className="txt-rating">{newRating}</dd>
                            <dt className="sr-only">리뷰 수</dt>
                            <dd className="txt-count-comment">{reviews ? reviews.length : 0}</dd>
                        </dl>
                    </dl>
                </div>
            </div>
        </li>
    );
}
