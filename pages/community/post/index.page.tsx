import React from 'react';
import { PageProps } from '../../../renderer/types';
import { TopBar } from '../../../components/topBar/topBar';
import { ContentSection } from './ContentSection/ContentSection';
import { CommentSection } from './CommentSection/CommentSection';

export { Page };

function Page(pageProps: PageProps) {
    const postInfo = pageProps.postInfo;
    const { subject, content, like, owner, photo, registeredAt, comments, title, _id } = postInfo;

    return (
        <>
            <TopBar title={subject} />
            <main className="main-read-post">
                <ContentSection postInfo={postInfo} />
                <CommentSection postId={_id} comments={comments} />
            </main>
        </>
    );
}
