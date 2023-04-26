import React from 'react';
import { Restaurant } from '../../../../server/models/Restaurant';

export { ReviewSection };

function ReviewSection(props: { restaurantInfo: Restaurant }) {
    return (
        <>
            <a
                href={`/search/${props.restaurantInfo._id}/review/`}
                style={{ display: 'block', textAlign: 'center', padding: '20px', backgroundColor: 'lightgreen' }}
            >
                리뷰 작성하기
            </a>
            <div>
                <div>채식냠냠이</div>
                <span>2023.04.26</span>
                <div>
                    <img src="/dummy-1.jpg" alt="" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                    <img src="/dummy-2.jpg" alt="" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                    <img src="/dummy-3.jpg" alt="" style={{ width: '100px', height: '100px' }} />
                </div>
                <div>맛있어요. 근데 문을 너무 일찍 닫아서 아쉬워요 ㅜㅜㅜㅜ</div>
                <div>좋아요</div>
            </div>
        </>
    );
}
