import React from 'react';

export { Page };

function Page(pageProps) {
    // TODO: 화면 구조 만들기(북마크, 인증여부, 좋아요, 후기, 카테고리별 이미지 만들기(카페, 식당))
    const { title, address, category } = pageProps.restaurantInfo;

    return (
        <>
            <h3>{title}</h3>
            <div>주소: {address}</div>
            <div>업종: {category}</div>
        </>
    );
}
