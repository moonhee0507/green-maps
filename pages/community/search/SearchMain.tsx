import React from 'react';
import { StickyComponent } from './StickyComponent/StickyComponent';
import { ResultSection } from './ResultSection/ResultSection';
import type { Post } from '../../../server/models/Post';

export default function SearchMain(props: { posts: Post[]; limit: number }) {
    const { posts, limit } = props;

    return (
        <main className="community-search-main">
            <StickyComponent />
            <ResultSection posts={posts} limit={limit} />
        </main>
    );
}
