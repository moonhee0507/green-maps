import React from 'react';
import { Review } from '../../../../../server/models/Review';

export { ReviewItem };

function ReviewItem(props: { item: Review }) {
    const { owner, registeredAt, photo, content, like } = props.item;
    const pickedPhoto = photo?.filter((v, i) => v.pick === true)[0];

    // const pickedPhoto: {
    //     src: blob:http://localhost:5000/ca7e7532-78c5-40a9-bf00-3aff6a9f41d5;
    //     pick: true;
    // } | undefined
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
                            src={pickedPhoto?.src}
                            alt=""
                            style={{ width: '100px', height: '100px', marginRight: '10px' }}
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
