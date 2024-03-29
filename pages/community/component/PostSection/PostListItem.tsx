import React, { ForwardedRef, forwardRef } from 'react';
import { Title } from './component/Title';
import { PreviewText } from './component/PreviewText';
import { PostItemDetail } from './component/PostItemDetail';
import { Subject } from './component/Subject';
import type { Post } from '../../../../server/models/Post';

export default forwardRef(PostListItem);

function PostListItem(props: { postInfo: Post }, ref: ForwardedRef<HTMLLIElement>) {
    const { _id, subject, owner, title, content, photo, like, registeredAt, comments } = props.postInfo;
    const removeTagContent = removeUnnecessaryString(content);
    const imageSize = '80px';

    return (
        <li ref={ref}>
            <a
                href={`/community/${_id.toString()}`}
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
                    <PreviewText content={removeTagContent} />
                    <PostItemDetail owner={owner.user_id} like={like} registeredAt={registeredAt} comments={comments} />
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

/**
 * Tag와 &nbsp;같은 특수문자 제거 함수
 */
function removeUnnecessaryString(html: string): string {
    return html.replaceAll(/<[^>]*>/g, '').replaceAll(/&[a-zA-Z0-9]*;/g, '');
}
