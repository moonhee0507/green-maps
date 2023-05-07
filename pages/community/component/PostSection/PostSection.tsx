import React, { useEffect, useRef, useState } from 'react';
import { PostItem } from './PostItem';
import type { Post } from '../../../../server/models/Post';

export { PostSection };

function PostSection(props: { posts: Array<Post> }) {
    const { posts } = props;
    const [currentSlice, setCurrentSlice] = useState<number>(0);

    const lastPostRef = useRef(null);

    const [renderPost, setRenderPost] = useState(posts.slice(0, 20));

    useEffect(() => {
        const option = {
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting) {
                // 게시물 추가
            }
        }, option);

        if (lastPostRef.current) observer.observe(lastPostRef.current);

        return () => {
            if (lastPostRef.current) {
                observer.unobserve(lastPostRef.current);
            }
        };
    }, [lastPostRef]);

    return (
        <section>
            <h3 className="sr-only">게시글 목록</h3>
            <ul className="wrapper-posts">
                {renderPost.map((post, i) => {
                    return (
                        <li key={i} ref={lastPostRef}>
                            <PostItem postInfo={post} />
                        </li>
                    );
                })}
                {
                    // 여기에 추가
                }
            </ul>
        </section>
    );
}
