import React from 'react';

export { ReviewButton };

function ReviewButton(props: { restaurantId: string }) {
    return (
        <a
            href={`/search/${props.restaurantId}/review/`}
            style={{ display: 'block', textAlign: 'center', padding: '20px', backgroundColor: 'lightgreen' }}
        >
            리뷰 작성하기
        </a>
    );
}
