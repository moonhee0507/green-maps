import React from 'react';
import { PostList } from './PostList';
import type { Post } from '../../../../server/models/Post';

export { PostSection };

function PostSection(props: { posts: Array<Post>; limit: number }) {
    const { posts, limit } = props;

    return (
        <section>
            <h3 className="sr-only">게시글 목록</h3>
            <PostList posts={posts} limit={limit} />
        </section>
    );
}
