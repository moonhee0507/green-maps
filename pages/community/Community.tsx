import React from 'react';
import { CommunityDetail } from './component/CommunityDetail/CommunityDetail';
import { ButtonGroup } from './component/ButtonGroup/ButtonGroup';
import { PostSection } from './component/PostSection/PostSection';
import type { Post } from '../../server/models/Post';

export { Community };

export type PostProps = {
    total: number;
    countLimit: number;
    currentPage: number;
    lists: Array<Post>;
};

type PostPagination = {
    [key: number]: Post[];
};

function Community(props: { posts: PostProps }) {
    const { total, lists } = props.posts;

    // 커뮤니티 페이지에 오면 게시물을 나눠서 저장

    return (
        <main className="main-community">
            <CommunityDetail total={total} posts={lists} />
            <ButtonGroup />
            <PostSection posts={lists} />
        </main>
    );
}
