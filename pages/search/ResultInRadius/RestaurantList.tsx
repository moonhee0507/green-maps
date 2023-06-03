import React, { useEffect, useRef, useState } from 'react';
import useSwipeHook from './useSwipeHook';
import { useAppSelector } from '../../../renderer/store/hooks';
import { RestaurantListItem } from './RestaurantListItem';

export { RestaurantList };

export const __FLEX_GAP__ = 10;
export const __LI_WIDTH__ = 350;
export const __BORDER__ = 1 * 2;

function RestaurantList() {
    const resultInRadius = useAppSelector((state) => state.mapSlice.resultInRadius);
    const swipeContainerRef = useRef<HTMLDivElement>(null);

    const [left, setLeft] = useState(0);
    const [deltaX, setDeltaX] = useState(0); // X축 이동

    const handleDragStart = (event: HammerInput) => {
        // 1. 이동한 거리를 deltaX에 저장
        setDeltaX(event.deltaX);
    };

    const handleDragMove = (event: HammerInput) => {
        // 3. 이동한 거리를 deltaX에 저장
        setDeltaX(event.deltaX);
    };

    useEffect(() => {
        // 2. 4. deltaX가 바뀌면 left 재계산
        setLeft((prevLeft) => prevLeft + deltaX);
    }, [deltaX]);

    useEffect(() => {
        // left가 바뀌면 left가 0 초과이거나 마지막요소의 왼쪽 위치보다 작으면 최대/최소값으로 이동
        if (left > 0) {
            setLeft(0);
        }

        if (left < (__FLEX_GAP__ + __LI_WIDTH__ + __BORDER__) * (resultInRadius.length - 1) * -1) {
            setLeft((__FLEX_GAP__ + __LI_WIDTH__ + __BORDER__) * (resultInRadius.length - 1) * -1);
        }
    }, [left]);

    useSwipeHook({
        elRef: swipeContainerRef,
        onDragStart: handleDragStart,
        onDragMove: handleDragMove,
    });

    return (
        <div className="wrapper-swiper">
            <div
                className="container-swiper"
                ref={swipeContainerRef}
                style={{ transform: `translateX(${left}px)`, transition: '1s' }}
            >
                <ul className="ul-restaurant-in-radius" style={{ gap: `${__FLEX_GAP__}px` }}>
                    {resultInRadius.map((restaurantInfo) => {
                        return <RestaurantListItem key={Math.random()} restaurantInfo={restaurantInfo} />;
                    })}
                </ul>
            </div>
        </div>
    );
}
