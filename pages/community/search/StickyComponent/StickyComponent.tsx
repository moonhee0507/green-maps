import React from 'react';
import { InputGroup } from '../InputGroup/InputGroup';
import { CommunityDetail } from '../ResultSection/CommunityDetail/CommunityDetail';
import type { PostProps } from '../../Community';

export { StickyComponent };

function StickyComponent(props: { keyword: string; postInfo: PostProps }) {
    const { keyword, postInfo } = props;
    return (
        <div
            style={{
                position: 'sticky',
                top: 0,
            }}
        >
            <InputGroup keyword={keyword} />
            <CommunityDetail postInfo={postInfo} />
        </div>
    );
}
