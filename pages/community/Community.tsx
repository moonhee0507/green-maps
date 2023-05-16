import React, { useRef, useState } from 'react';
import { CommunityDetail } from './component/CommunityDetail/CommunityDetail.js';
import { ButtonGroup } from './component/ButtonGroup/ButtonGroup.js';
import { PostSection } from './component/PostSection/PostSection.js';
import type { Post } from '../../server/models/Post.js';

export { Community };

export type PostProps = {
    total: number;
    countLimit?: number;
    currentPage?: number;
    lists: Array<Post>;
};

function Community(props: { posts: Array<Post>; limit: number }) {
    const { posts, limit } = props;

    const mainElement = useRef<HTMLElement>(null);
    const [scroll, setScroll] = useState(false);

    function clickGoUpButton() {
        mainElement?.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    function handleScroll() {
        if (mainElement?.current?.scrollTop === 0) setScroll(false);
        else setScroll(true);
    }

    return (
        <>
            <main className="main-community" ref={mainElement} onScroll={handleScroll}>
                <CommunityDetail posts={posts} />
                <ButtonGroup />
                <PostSection posts={posts} limit={limit} />
            </main>
            {scroll && (
                <button id="buttonGoUp" onClick={clickGoUpButton} type="button">
                    맨위로
                </button>
            )}
        </>
    );
}
