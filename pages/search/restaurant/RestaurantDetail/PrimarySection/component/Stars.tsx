import React, { useState } from 'react';

export { Stars };

function Stars(props: { rating: string }) {
    const [rating] = useState(Number(props.rating));
    const maxRating = 5.0;

    try {
        if (maxRating < rating) {
            throw new Error('해당 식당의 평점 데이터가 올바르지 않습니다.');
        }
    } catch (e: any) {
        console.error(e.message);
    }

    const [arrStar] = useState(() => {
        const maxInt = Math.floor(rating);
        const rest = rating - maxInt;

        return new Array(maxRating).fill(0).map((_, i) => {
            if (i <= maxInt - 1) return 100;
            else if (i === maxInt) return rest * 100;
            else return 0;
        });
    });

    return (
        <div className="container-rating">
            {arrStar.map((percent: number, i: number) => {
                return <Star key={i + 1} id={i + 1} percent={percent} />;
            })}
            {window.location.pathname !== '/search' && <span>({rating.toFixed(1)})</span>}
        </div>
    );
}

function Star(props: { id: number; percent: number }) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={30}>
                <defs>
                    <linearGradient id={`starSegre${props.id}`} gradientTransform="rotate(0)">
                        <stop offset={`${props.percent}%`} stopColor="#fc0" />
                        <stop offset={`${props.percent}%`} stopColor="#d3d3d3" />
                    </linearGradient>
                </defs>
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    fill={`url('#starSegre${props.id}')`}
                />
            </svg>
        </>
    );
}
