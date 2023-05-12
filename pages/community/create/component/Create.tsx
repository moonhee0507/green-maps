import React from 'react';
import { SubjectBox } from '../../component/CommunityDetail/SubjectBox';
import { Title } from './Title';
import { Content } from './Content/Content';

export { Create };

function Create() {
    return (
        <main className="main-create-post">
            <form className="form-create-post">
                <SubjectBox />
                <Title />
                <Content />
            </form>
        </main>
    );
}
