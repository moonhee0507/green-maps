import React, { useEffect, useState } from 'react';
import type { Review } from '../../../../../server/models/Review';
import imgHeart from '/images/icon-heart.svg';

export { ReviewItem };

function ReviewItem(props: { item: Review }) {
    const { owner, registeredAt, photo, content, like } = props.item;
    const [src, setSrc] = useState<any>(null);

    useEffect(() => {
        getImageFromStorage();
        async function getImageFromStorage() {
            if (photo !== undefined) {
                setSrc(
                    `https://${import.meta.env.VITE_AWS_S3_BUCKET}.s3.${
                        import.meta.env.VITE_AWS_DEFAULT_REGION
                    }.amazonaws.com/${photo[0].src}`
                );
            }
        }
    }, [props.item]);

    return (
        <article className="container-review">
            <h5 className="sr-only">개별 리뷰</h5>
            <dl>
                <Owner owner={owner} />
                <Date registeredAt={registeredAt} />
                <Image src={src} />
                <ReviewLikeButton like={like} />
                <Content content={content} />
            </dl>
        </article>
    );
}

function Owner(props: { owner: string }) {
    return (
        <>
            <dt className="sr-only">작성자</dt>
            <dd className="txt-review-owner">{props.owner}</dd>
        </>
    );
}

function Date(props: { registeredAt: string }) {
    return (
        <>
            <dt className="sr-only">작성일자</dt>
            <dd className="txt-review-date">{props.registeredAt}</dd>
        </>
    );
}

function Image(props: { src: string }) {
    return (
        <>
            <dt className="sr-only">사진</dt>
            <dd className="container-review-img">{props.src && <img src={props.src} alt="리뷰 사진" />}</dd>
        </>
    );
}

function ReviewLikeButton(props: { like: Array<{ user: string }> | undefined }) {
    return (
        <>
            <dt className="sr-only">좋아요</dt>
            <dd className="num-like-count">
                <button className="button-review-like" type="button" onClick={() => console.log('좋아요')}>
                    <img src={imgHeart} alt="아이콘" className="img-like review" />
                </button>
                <span area-label="좋아요 개수">{props.like?.length || 0}</span>
            </dd>
        </>
    );
}

function Content(props: { content: string }) {
    return (
        <>
            <dt className="sr-only">내용</dt>
            <dd className="txt-review-content">{props.content}</dd>
        </>
    );
}
