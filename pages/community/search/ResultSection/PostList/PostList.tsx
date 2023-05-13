import React from 'react';
import PostListItem from './PostListItem';
import type { PostProps } from '../../../Community';

export { PostList };

function PostList(props: { postInfo: PostProps }) {
    const { lists } = props.postInfo;

    return (
        <ul>
            {lists.map((list) => {
                return <PostListItem list={list} />;
            })}
        </ul>
    );
}
