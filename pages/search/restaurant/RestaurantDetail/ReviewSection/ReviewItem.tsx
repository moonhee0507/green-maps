import React, { useEffect, useState } from 'react';
import { Review } from '../../../../../server/models/Review';

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
    }, [src]);

    return (
        <article>
            <h4 className="sr-only">리뷰</h4>
            <dl>
                <dt className="sr-only">작성자</dt>
                <dd>{owner}</dd>

                <dt className="sr-only">작성일자</dt>
                <dd>{registeredAt}</dd>

                <dt className="sr-only">사진</dt>
                <dd>
                    <div>
                        <img
                            src={src || ''}
                            alt="리뷰 사진"
                            style={{ width: '100px', height: '100px', marginRight: '10px', objectFit: 'cover' }}
                        />
                    </div>
                </dd>

                <dt className="sr-only">내용</dt>
                <dd>{content}</dd>

                <dt>좋아요</dt>
                <dd>{like?.length || 0}</dd>
            </dl>
        </article>
    );
}
