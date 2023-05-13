import React, { ForwardedRef, forwardRef } from 'react';
import { Title } from '../../../component/PostSection/component/Title';
import { PreviewText } from '../../../component/PostSection/component/PreviewText';
import { PostItemDetail } from '../../../component/PostSection/component/PostItemDetail';
import { Subject } from '../../../component/PostSection/component/Subject';
import type { Post } from '../../../../../server/models/Post';

export default forwardRef(PostListItem);

function PostListItem(props: { keyword?: string; list: Post }, ref: ForwardedRef<HTMLLIElement>) {
    const { keyword, list } = props;
    const { _id, subject, owner, title, content, photo, like, registeredAt, comments } = list;
    const imageSize = '80px';

    return (
        <li ref={ref}>
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
                    <Title title={title} keyword={keyword} />
                    <PreviewText content={content} />
                    <PostItemDetail owner={owner} like={like} registeredAt={registeredAt} comments={comments} />
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
