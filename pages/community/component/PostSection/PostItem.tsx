import React, { forwardRef } from 'react';
import { Post } from '../../../../server/models/Post';
import { Title } from './component/Title';
import { Content } from './component/Content';
import { PostItemDetail } from './component/PostItemDetail';
import { Subject } from './component/Subject';

export { PostItem };

function PostItem(props: { postInfo: Post }) {
    const { _id, subject, owner, title, content, photo, like, registeredAt, reviews } = props.postInfo;
    const imageSize = '80px';

    return (
        <li>
            <a
                href={`/community/${_id}`}
                style={{
                    width: '100%',
                    display: 'flex',
                    padding: '20px',
                }}
            >
                <dl
                    style={{
                        width: `calc(100% - ${photo && photo.length > 0 ? imageSize : '0px'})`,
                    }}
                >
                    <Subject subject={subject} />
                    <Title title={title} />
                    <Content content={content} />
                    <PostItemDetail owner={owner} like={like} registeredAt={registeredAt} reviews={reviews} />
                </dl>
                {photo && photo.length > 0 ? (
                    <dd>
                        <img
                            src={photo[0].src}
                            alt=""
                            style={{
                                width: imageSize,
                                height: imageSize,
                                objectFit: 'cover',
                            }}
                        />
                    </dd>
                ) : null}
            </a>
        </li>
    );
}
