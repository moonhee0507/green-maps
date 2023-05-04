import React from 'react';
import { PostItem } from './PostItem';
import type { PostProps } from '../../Community';

export { PostSection };

function PostSection(props: { posts: PostProps }) {
    const { lists } = props.posts;

    return (
        <section>
            <h3 className="sr-only">게시글 목록</h3>
            <ul className="wrapper-posts">
                {lists.map((post, i) => {
                    return <PostItem key={i} postInfo={post} />;
                })}
            </ul>
        </section>
    );
}
