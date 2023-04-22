import React from 'react';
import { Restaurant } from '../../../server/models/Restaurant';

export { PrimarySection };

function PrimarySection(props: { restaurantInfo: Restaurant }) {
    const { _id, title, address, category } = props.restaurantInfo;

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
