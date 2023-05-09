import React, { useEffect, useRef, useState } from 'react';
import PostListItem from './PostListItem';
import useIntersectionObserver from './useIntersectionObserver';
import { useDispatch, useStore } from 'react-redux';
import type { Post } from '../../../../server/models/Post';

export { PostList };

function PostList(props: { postInfo: Array<Post> }) {
    const { postInfo } = props;
    const target = useRef<HTMLLIElement>(null);

    const store = useStore<any>();

    const dispatch = useDispatch();

    const [observe, unobserve] = useIntersectionObserver(() => {
        // 현재 페이지가 마지막 페이지가 아닐 때만 페이지 증가
        const lastPage = Math.ceil(store.getState().postSlice.post.TOTAL / 20);
        const currentPage = store.getState().postSlice.post.CURRENT_PAGE;

        if (currentPage < lastPage) {
            dispatch({
                type: 'postSlice/POST_IN_PAGE',
                TOTAL: store.getState().postSlice.post.TOTAL,
                CURRENT_PAGE: store.getState().postSlice.post.CURRENT_PAGE + 1,
            });
        }
    });

    useEffect(() => {
        const lastPage = Math.ceil(store.getState().postSlice.post.TOTAL / 20);
        const currentPage = store.getState().postSlice.post.CURRENT_PAGE;

        if (currentPage === lastPage) {
            unobserve(target.current);
            console.log(`currentPage가 ${currentPage}이고 lastPage가 ${lastPage}여서 감시 중단`);
        } else if (currentPage < lastPage) {
            observe(target.current);
            console.log(`currentPage가 ${currentPage}이고 lastPage가 ${lastPage}여서 감시 계속 =======`);
        }
    }, [observe, unobserve]);

    return (
        <ul className="wrapper-posts">
            {postInfo.map((post, i) => {
                if (i === postInfo.length - 1) {
                    return <PostListItem key={i} postInfo={post} ref={target} />;
                } else return <PostListItem key={i} postInfo={post} />;
            })}
        </ul>
    );
}
