import React from 'react';
import { CommunityDetail } from './component/CommunityDetail/CommunityDetail';
import { ButtonGroup } from './component/ButtonGroup/ButtonGroup';
import { PostSection } from './component/PostSection/PostSection';

export { Community };

function Community() {
    return (
        <main className="main-community">
            <CommunityDetail />
            <ButtonGroup />
            <PostSection />
        </main>
    );
}
