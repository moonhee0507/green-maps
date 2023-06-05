import React from 'react';
import { Stars } from '../restaurant/RestaurantDetail/PrimarySection/component/Stars';
import imgPhoto from '/images/icon-image.svg';
import type { Restaurant } from '../../../server/models/Restaurant';

export default function InfoWindow({ restaurantInfo }: { restaurantInfo: Restaurant }) {
    const { _id, title, rating, reviews, address, certification, category } = restaurantInfo;

    return (
        <div className="wrapper-infowindow">
            <dl>
                <div className="infowindow-left">
                    <div className="container-title-cert">
                        <dt className="sr-only">식당 이름</dt>
                        <dd className="txt-title">
                            <a href={`/search/${_id}`} className="">
                                {title}
                            </a>
                        </dd>

                        <div>
                            {certification ? (
                                <>
                                    <dt className="sr-only">채식 인증 정보</dt>
                                    <dd className="txt-cert">{certification}</dd>
                                    {/* <dd className="txt-cert green">채식가능음식점</dd> */}
                                </>
                            ) : null}

                            <dt className="sr-only">업종</dt>
                            <dd className="txt-cert">{category}</dd>
                        </div>
                    </div>

                    <div className="container-rating-review">
                        <div>
                            <dt className="sr-only">별점</dt>
                            <dd>
                                <span className="num-rating">{rating}</span>
                                <div className="style-infowindow-star">
                                    <Stars rating={rating} />
                                </div>
                            </dd>
                        </div>

                        <div>
                            <dt>리뷰</dt>
                            <dd>{reviews.length}</dd>
                        </div>
                    </div>

                    <dt className="sr-only">주소</dt>
                    <dd className="txt-address">{address}</dd>
                </div>

                <div className="infowindow-right">
                    <dt className="sr-only">대표이미지</dt>
                    <dd>
                        <img src={imgPhoto} alt="임시 이미지" />
                        <span>준비 중</span>
                    </dd>
                </div>
            </dl>

            <div className="container-infowindow-button">
                <button aria-label="북마크" className="button-bookmark" />
                <button aria-label="좋아요" className="button-like" />
                <button aria-label="다음지도에서 보기" className="button-kakao-map" />
            </div>
        </div>
    );
}
