import React from 'react';
import { SubjectBox } from './SubjectBox';

export { CommunityDetail };

function CommunityDetail() {
    return (
        <div className="container-newpost-selectbox">
            <p className="txt-postinfo">
                새글 <span>555</span>/860,192
            </p>
            <SubjectBox from="글 쓰기" />
        </div>
    );
}
