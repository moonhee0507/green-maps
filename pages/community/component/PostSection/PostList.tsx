import React, { useEffect, useRef, useState } from 'react';
import PostListItem from './PostListItem';
import useIntersectionObserver from './useIntersectionObserver';
import { useDispatch, useSelector } from 'react-redux';
import type { Post } from '../../../../server/models/Post';
import { RootState } from '../../../../renderer/store';

export { PostList };

function PostList(props: { total: number; postInfo: Array<Post> }) {
    const { total, postInfo } = props;
    const dispatch = useDispatch();

    const subject = useSelector((state: RootState) => state.postSlice.SUBJECT);
    const postInPage = useSelector((state: RootState) => state.postSlice.post.LIST);

    const [page, setPage] = useState<number>(1);
    const target = useRef<HTMLLIElement>(null);

    const [observe, unobserve] = useIntersectionObserver(() => {
        setPage((page) => page + 1);
    });

    useEffect(() => {
        const lastPage = Math.ceil(total / 20);

        if (page === lastPage) {
            unobserve(target.current);
        } else observe(target.current);
    }, [observe, unobserve]);

    useEffect(() => {
        if (page !== 1) {
            if (subject !== '' && typeof subject === 'string') {
                getSameSubjectPost(subject).then((lists) => {
                    dispatch({ type: 'postSlice/POST_IN_PAGE', LIST: [...postInPage, ...lists] });
                });
            } else if (subject === '') {
                getPostInPage(page).then((lists) => {
                    dispatch({ type: 'postSlice/POST_IN_PAGE', LIST: [...postInPage, ...lists] });
                });
            }
        }
    }, [page]);

    useEffect(() => {
        if (subject !== '' && typeof subject === 'string') {
            getSameSubjectPost(subject).then((lists) => {
                dispatch({ type: 'postSlice/POST_IN_PAGE', LIST: [...lists] });
            });
        }
    }, [subject]);

    async function getPostInPage(page: number) {
        try {
            const res = await fetch(`http://localhost:5000/api/posts?page=${page}&limit=20`);
            const data = await res.json();

            return data.lists;
        } catch (err) {
            console.error(err);
        }
    }

    async function getSameSubjectPost(subject: string) {
        try {
            const encodedSubject = encodeURIComponent(subject);
            const res = await fetch(`http://localhost:5000/api/subjects/${encodedSubject}?page=${page}&limit=20`);
            const sameSubject = await res.json();

            return sameSubject.lists;
        } catch (err) {
            console.error(err);
        }
    }

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
