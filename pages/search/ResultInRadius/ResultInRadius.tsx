import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../../renderer/store/hooks';
import { Restaurant } from '../../../server/models/Restaurant';
import imgDummy from '../../../dummy-1.jpg';
import { Distance } from '../../my-lists/bookmark/BookmarkListMain/BookmarkList/Distance';

export { ResultInRadius };

function ResultInRadius() {
    return (
        <div className="wrapper-result-in-radius">
            <CountMessage />
            <RestaurantList />
        </div>
    );
}

function CountMessage() {
    const resultInRadius = useAppSelector((state) => state.mapSlice.resultInRadius);

    return (
        <p className="txt-result-in-radius">
            검색된 식당 <span>{resultInRadius.length}</span>개
        </p>
    );
}

function RestaurantList() {
    const resultInRadius = useAppSelector((state) => state.mapSlice.resultInRadius);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const [moveX, setMoveX] = useState(0);

    const target = useRef<HTMLDivElement>(null);

    useEffect(() => {}, []);

    useEffect(() => {
        console.log('startX', startX);
        console.log('currentX', currentX);
    }, [startX, currentX]);

    // TODO: event리스너로 만들어보기
    return (
        <div className="wrapper-swiper">
            <div
                className="container-swiper"
                ref={target}
                onTouchStart={(e: React.TouchEvent) => {
                    console.log('터치 시작', e.targetTouches[0].clientX);
                    // setStartX(e.targetTouches[0].clientX);
                }}
                onTouchMove={(e: React.TouchEvent) => {
                    e.preventDefault();
                    // console.log('터치 끝', e.targetTouches[0].clientX);
                    // setCurrentX(e.targetTouches[0].clientX);
                }}
                onTouchEnd={(e: React.TouchEvent) => {}}
                style={{ left: `-${moveX}px` }}
            >
                <ul className="ul-restaurant-in-radius">
                    {resultInRadius.map((restaurantInfo) => {
                        return <RestaurantListItem key={Math.random()} restaurantInfo={restaurantInfo} />;
                    })}
                </ul>
            </div>
        </div>
    );
}

function RestaurantListItem({ restaurantInfo }: { restaurantInfo: Restaurant }) {
    const { _id, category, title, address, rating, reviews, certification, location } = restaurantInfo;

    return (
        <li>
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

function Thumb({ category }: { category: string }) {
    return (
        <div className="container-img">
            <img src={imgDummy} alt="업종별 이미지" />
        </div>
    );
}
