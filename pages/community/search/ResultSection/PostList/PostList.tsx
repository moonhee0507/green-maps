import React from 'react';
import PostListItem from './PostListItem';
import type { PostProps } from '../../../Community';

export { PostList };

function PostList(props: { keyword: string; postInfo: PostProps }) {
    const { keyword, postInfo } = props;
    const { lists } = postInfo;

    return (
        <ul className="wrapper-posts">
            {lists.map((list, i) => {
                return <PostListItem key={i} keyword={keyword} list={list} />;
            })}
        </ul>
    );
}
