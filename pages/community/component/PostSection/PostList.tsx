import React, { useEffect, useRef, useState } from 'react';
import PostListItem from './PostListItem';
import useIntersectionObserver from '../../useIntersectionObserver';
import { useDispatch, useStore } from 'react-redux';
import type { Post } from '../../../../server/models/Post';
import { useAppSelector } from '../../../../renderer/store/hooks';

export { PostList };

function PostList(props: { posts: Array<Post>; limit: number }) {
    const { posts, limit } = props;
    const target = useRef<HTMLLIElement>(null);

    // const store = useStore<any>();

    const dispatch = useDispatch();

    const [totalCount, currentPage] = useAppSelector((state) => {
        return [state.postSlice.post.TOTAL, state.postSlice.post.CURRENT_PAGE];
    });

    const [observe, unobserve] = useIntersectionObserver(() => {
        // 현재 페이지가 마지막 페이지가 아닐 때만 페이지 증가
        // const lastPage = Math.ceil(store.getState().postSlice.post.TOTAL / limit);
        // const currentPage = store.getState().postSlice.post.CURRENT_PAGE;
        const lastPage = Math.ceil(totalCount / limit);

        if (currentPage < lastPage) {
            dispatch({
                type: 'postSlice/POST_IN_PAGE',
                // TOTAL: store.getState().postSlice.post.TOTAL,
                // CURRENT_PAGE: store.getState().postSlice.post.CURRENT_PAGE + 1,
                TOTAL: totalCount,
                CURRENT_PAGE: currentPage + 1,
            });
        }
    });

    useEffect(() => {
        // const lastPage = Math.ceil(store.getState().postSlice.post.TOTAL / limit);
        // const currentPage = store.getState().postSlice.post.CURRENT_PAGE;
        const lastPage = Math.ceil(totalCount / limit);

        if (currentPage === lastPage) {
            unobserve(target.current);
            console.log(`currentPage가 ${currentPage}이고 lastPage가 ${lastPage}여서 감시 중단`);
        } else if (currentPage < lastPage) {
            observe(target.current);
            console.log(`currentPage가 ${currentPage}이고 lastPage가 ${lastPage}여서 감시 계속 =======`);
        }
    }, [observe, unobserve, totalCount, currentPage]);

    return (
        <ul className="wrapper-posts">
            {posts
                .filter((post) => post.subject !== '공지사항')
                .map((post, i) => {
                    console.log('post', post);
                    console.log('i', i);
                    if (i === posts.length - 1) {
                        return <PostListItem key={i} postInfo={post} ref={target} />;
                    } else return <PostListItem key={i} postInfo={post} />;
                })}
        </ul>
    );
}
