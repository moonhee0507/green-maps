import React from 'react';
import { CommunityDetail } from './component/CommunityDetail/CommunityDetail';
import { ButtonGroup } from './component/ButtonGroup/ButtonGroup';
import { PostSection } from './component/PostSection/PostSection';
import { Post } from '../../server/models/Post';

export { Community };

export type PostProps = {
    total: number;
    countLimit: number;
    currentPage: number;
    lists: Array<Post>;
};

function Community(props: { posts: PostProps }) {
    console.log(props.posts);
    return (
        <main className="main-community">
            <CommunityDetail />
            <ButtonGroup />
            <PostSection posts={props.posts} />
        </main>
    );
}
