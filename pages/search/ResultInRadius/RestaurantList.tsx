import React, { useRef, useState } from 'react';
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

    const handleDragMove = (event: HammerInput) => {
        const deltaX = event.deltaX;

        setLeft((prevLeft) => {
            const newLeft = prevLeft + deltaX;

            // left가 바뀌면 left가 0 초과이거나 마지막요소의 왼쪽 위치보다 작으면 최대/최소값으로 이동
            if (newLeft > 0) {
                return 0;
            }

            const leftOfLastElement = (__FLEX_GAP__ + __LI_WIDTH__ + __BORDER__) * (resultInRadius.length - 1) * -1;
            if (newLeft < leftOfLastElement) {
                return leftOfLastElement;
            }

            return newLeft;
        });
    };

    useSwipeHook({
        elRef: swipeContainerRef,
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
