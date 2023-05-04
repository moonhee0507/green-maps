import React from 'react';
import { PageProps } from '../../../renderer/types';
import { TopBar } from '../../../components/topBar/topBar';
import { TextArea } from './TextArea/TextArea';

export { Page };

function Page(pageProps: PageProps) {
    const postInfo = pageProps.postInfo;
    const { subject, content, like, owner, photo, registeredAt, reviews, title, _id } = postInfo;

    return (
        <>
            <TopBar title={subject} />
            <main className="main-read-post">
                <section>
                    <h3 aria-label="게시글 제목">{title}</h3>
                    <div>
                        <p aria-label="작성자">{owner}</p>
                        <time aria-label="작성시간">{registeredAt}</time>
                    </div>
                    <TextArea content={content} />
                    <button>좋아요</button>
                </section>
                <section>
                    <h3 className="sr-only">댓글</h3>
                </section>
            </main>
        </>
    );
}
