import React from 'react';

export { Page };

function Page(pageProps) {
    // TODO: 화면 구조 만들기(북마크, 인증여부, 좋아요, 후기, 카테고리별 이미지 만들기(카페, 식당))
    const { _id, title, address, category } = pageProps.restaurantInfo;

    async function addBookmark(_id) {
        const res = await fetch(`http://localhost:5000/api/users/bookmark`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id: _id, registeredAt: new Date().toLocaleDateString('ko-kr') }),
        });

        if (res.ok) alert('북마크에 추가되었습니다.');
        else alert('오류가 발생했습니다.');
    }

    return (
        <>
            <button onClick={() => addBookmark(_id)} style={{ display: 'block' }} type="button">
                북마크
            </button>
            <h3>{title}</h3>
            <div>주소: {address}</div>
            <div>업종: {category}</div>
        </>
    );
}
