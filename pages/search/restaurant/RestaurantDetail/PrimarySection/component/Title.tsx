import React from 'react';

export { Title };

function Title(props: { title: string; address: string; category: string }) {
    return (
        <>
            <div>업종: {props.category}</div>
            <h3>{props.title}</h3>
            <div>주소: {props.address}</div>
            <button>주소복사</button>
        </>
    );
}
