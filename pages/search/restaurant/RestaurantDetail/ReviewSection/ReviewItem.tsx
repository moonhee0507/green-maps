import React, { useCallback, useEffect, useState } from 'react';
import { Review } from '../../../../../server/models/Review';
import { getImage } from '../../../../../server/storage/command';

export { ReviewItem };

function ReviewItem(props: { item: Review }) {
    const { owner, registeredAt, photo, content, like } = props.item;
    const [src, setSrc] = useState<any>(null);

    async function getImageFromStorage() {
        if (photo !== undefined) {
            const credential = {
                accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
                secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
                region: import.meta.env.VITE_AWS_DEFAULT_REGION,
            };
            const params = { Bucket: import.meta.env.VITE_AWS_S3_BUCKET, Key: photo[0].src };

            await getImage(credential, params).then((data) => setSrc(data));
        }
    }

    useEffect(() => {
        getImageFromStorage();
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
                        <img src={src || ''} alt="" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
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
