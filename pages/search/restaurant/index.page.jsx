import React from 'react';

export { Page };

function Page(pageProps) {
    // TODO: 화면 구조 만들기(북마크, 인증여부, 좋아요, 후기, 카테고리별 이미지 만들기(카페, 식당))

    return (
        <>
            <h3>{pageProps?.restaurantInfo?.title}</h3>
            <div>주소: {pageProps?.restaurantInfo?.address}</div>
            <div>업종: {pageProps?.restaurantInfo?.category}</div>
        </>
    );
}
