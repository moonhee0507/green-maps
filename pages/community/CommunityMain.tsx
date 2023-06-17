import React from 'react';
import { ButtonGroup } from './component/ButtonGroup/ButtonGroup';
import { Community } from './Community';
import type { Post } from '../../server/models/Post';

export default function CommunityMain({
    isLoggedIn,
    posts,
    limit,
}: {
    isLoggedIn: boolean;
    posts: Array<Post>;
    limit: number;
}) {
    return (
        <>
            <ButtonGroup isLoggedIn={isLoggedIn} />
            <Community posts={posts} limit={limit} isLoggedIn={isLoggedIn} />
        </>
    );
}
