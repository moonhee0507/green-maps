import React from 'react';
import imgHeart from '/images/icon-heart.svg';

export { LikeButton };

function LikeButton(props: { restaurantId: string }) {
    return (
        <button className="button-like" onClick={() => console.log('좋아요')} type="button">
            <img src={imgHeart} alt="좋아요 이미지" className="img-like" />
            <span className="txt-like">좋아요</span>
        </button>
    );
}
