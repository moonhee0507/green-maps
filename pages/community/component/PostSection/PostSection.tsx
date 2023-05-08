import React from 'react';
import { PostList } from './PostList';
import type { Post } from '../../../../server/models/Post';

export { PostSection };

function PostSection(props: { total: number; posts: Array<Post> }) {
    const { total, posts } = props;

    return (
        <section>
            <h3 className="sr-only">게시글 목록</h3>
            {posts ? <PostList total={total} postInfo={posts} /> : <p>불러오는 중...</p>}
        </section>
    );
}
