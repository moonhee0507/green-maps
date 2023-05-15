import React from 'react';
import { PostList } from './PostList/PostList';
import type { Post } from '../../../../server/models/Post';

export { ResultSection };

function ResultSection(props: { posts: Post[]; limit: number }) {
    const { posts, limit } = props;

    return (
        <section>
            <h3 className="sr-only">검색결과</h3>
            <PostList posts={posts} limit={limit} />
        </section>
    );
}
