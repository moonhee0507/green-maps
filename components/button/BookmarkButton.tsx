import React from 'react';
import imgBookmark from '/images/icon-bookmark.svg';

export { BookmarkButton };

function BookmarkButton(props: { restaurantId: string }) {
    async function addBookmark(restaurantId: string) {
        const res = await fetch(`http://localhost:5000/api/users/bookmark`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id: restaurantId, registeredAt: new Date().toLocaleDateString('ko-kr') }),
        });

        if (res.ok) alert('북마크에 추가되었습니다.');
        else alert('오류가 발생했습니다.');
    }

    return (
        <button className="button-bookmark" onClick={() => addBookmark(props.restaurantId)} type="button">
            <img src={imgBookmark} alt="북마크 이미지" className="img-bookmark" />
            <span className="txt-bookmark">북마크</span>
        </button>
    );
}
