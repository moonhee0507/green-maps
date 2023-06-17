import React from 'react';
import { InputGroup } from '../InputGroup/InputGroup';
import { CommunityDetail } from '../ResultSection/CommunityDetail/CommunityDetail';

export { StickyComponent };

function StickyComponent() {
    return (
        <div
            style={{
                position: 'sticky',
                top: 0,
                margin: '-10px',
                padding: '-10px',
                backgroundColor: '#fff',
            }}
        >
            <InputGroup />
            <CommunityDetail />
        </div>
    );
}
