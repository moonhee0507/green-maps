import React from 'react';

export { Image };

function Image(props: { src: string }) {
    return (
        <>
            <dt className="sr-only">사진</dt>
            <dd className="container-review-img">{props.src && <img src={props.src} alt="리뷰 사진" />}</dd>
        </>
    );
}
