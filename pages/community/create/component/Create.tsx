import React from 'react';
import { SubjectBox } from '../../component/CommunityDetail/SubjectBox';
import { Title } from './Title';
import { Content } from './Content/Content';
import { Post } from '../../../../server/models/Post';

export { Create };

function Create({ postInfo }: { postInfo?: Post | null }) {
    return (
        <main className="main-create-post">
            <form className="form-create-post">
                <SubjectBox postInfo={postInfo} />
                <Title postInfo={postInfo} />
                <Content postInfo={postInfo} />
            </form>
        </main>
    );
}
