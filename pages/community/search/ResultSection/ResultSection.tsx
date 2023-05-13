import React from 'react';
import { CommunityDetail } from './CommunityDetail/CommunityDetail';
import { PostList } from './PostList/PostList';
import type { PostProps } from '../../Community';

export { ResultSection };

function ResultSection(props: { postInfo: PostProps }) {
    const postInfo = props.postInfo;

    return (
        <section>
            <h3 className="sr-only">검색결과</h3>
            <CommunityDetail postInfo={postInfo} />
            <PostList postInfo={postInfo} />
        </section>
    );
}
