import React, { useEffect, useState } from 'react';
import type { Review } from '../../../../../server/models/Review';
import { Owner, Date, Image, ReviewLikeButton, Content } from './component/index.js';

export { ReviewItem };

function ReviewItem(props: { item: Review }) {
    const { _id, owner, registeredAt, photo, content, like } = props.item;
    const [src, setSrc] = useState<string | null>(null);

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
                {src && <Image src={src} />}
                <ReviewLikeButton reviewId={_id} like={like} />
                <Content content={content} />
            </dl>
        </article>
    );
}
