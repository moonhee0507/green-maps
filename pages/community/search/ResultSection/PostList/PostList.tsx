import React from 'react';
import PostListItem from './PostListItem';
import type { Post } from '../../../../../server/models/Post';

export { PostList };

function PostList(props: { posts: Post[] }) {
    const { posts } = props;

    return (
        <ul className="wrapper-posts">
            {posts.map((post, i) => {
                return <PostListItem key={i} postInfo={post} />;
            })}
        </ul>
    );
}
