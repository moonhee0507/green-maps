import React, { useEffect, useRef, useState } from 'react';
import PostListItem from './PostListItem';
import useIntersectionObserver from './useIntersectionObserver';
import type { Post } from '../../../../server/models/Post';

export { PostList };

function PostList(props: { total: number; postInfo: Array<Post> }) {
    const { total, postInfo } = props;

    const [page, setPage] = useState<number>(1);
    const [postInPage, setPostInPage] = useState<Array<Post>>(postInfo);
    const target = useRef<HTMLLIElement>(null);

    const [observe, unobserve] = useIntersectionObserver(() => {
        setPage((page) => page + 1);
    });

    useEffect(() => {
        const lastPage = Math.ceil(total / 20);

        if (page === lastPage) unobserve(target.current);
        else observe(target.current);
    }, [observe, unobserve]);

    useEffect(() => {
        if (page !== 1) {
            getPostInPage(page).then((lists) => {
                setPostInPage((postInPage) => [...postInPage, ...lists]);
            });
        }

        async function getPostInPage(page: number) {
            try {
                const res = await fetch(`http://localhost:5000/api/posts?page=${page}&limit=20`);
                const data = await res.json();

                return data.lists;
            } catch (err) {
                console.error(err);
            }
        }
    }, [page]);

    return (
        <ul className="wrapper-posts">
            {postInPage.map((post, i) => {
                if (i === postInPage.length - 1) {
                    return <PostListItem key={i} postInfo={post} ref={target} />;
                } else return <PostListItem key={i} postInfo={post} />;
            })}
        </ul>
    );
}
