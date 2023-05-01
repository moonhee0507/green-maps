import React from 'react';
import { PostItem } from './PostItem';

export { PostSection };

function PostSection() {
    return (
        <section>
            <h3 className="sr-only">게시글 목록</h3>
            <ul className="wrapper-posts">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </ul>
        </section>
    );
}
