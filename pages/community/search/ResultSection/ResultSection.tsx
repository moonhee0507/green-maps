import React from 'react';
import { PostList } from './PostList/PostList';
import type { PostProps } from '../../Community';

export { ResultSection };

function ResultSection(props: { keyword: string; postInfo: PostProps }) {
    const { keyword, postInfo } = props;

    return (
        <section>
            <h3 className="sr-only">검색결과</h3>
            <PostList keyword={keyword} postInfo={postInfo} />
        </section>
    );
}
