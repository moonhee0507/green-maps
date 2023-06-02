import React, { useCallback, useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { Community } from './Community';
import { NavBar } from '../../components/navBar';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../renderer/store/hooks';
import { API_URL } from '../CONSTANT_URL';
import type { PageProps } from '../../renderer/types';
import type { Post } from '../../server/models/Post';
import { ButtonGroup } from './component/ButtonGroup/ButtonGroup';

export { Page };

function Page(pageProps: PageProps) {
    const { isLoggedIn } = pageProps.user;

    // 전역에서 관리하는 변수: subject 등록 여부, 현재 페이지, 한페이지당 최대게시물 수
    const subject = useAppSelector((state) => state.postSlice.SUBJECT);
    const currentPage = useAppSelector((state) => state.postSlice.post.CURRENT_PAGE);

    const limit = 20;

    // 내려보내는 데이터는 여기서 정해짐
    const [posts, setPosts] = useState<Array<Post>>(pageProps.postProps?.lists || []);

    const getPosts = useCallback(async () => {
        try {
            // 말머리에 내용이 있으면 subjects/:name, 아니면 posts
            const res = await fetch(
                `${API_URL}/${subject !== '' ? 'subjects/' + subject : 'posts'}?page=${currentPage}&limit=${limit}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const data = await res.json();

            return data;
        } catch (err) {
            console.log(err);
        }
    }, [currentPage, subject]); // 현재 페이지 바뀌면 새 게시물 가져오기 + 말머리 바뀌면 새 게시물 가져오기

    const dispatch = useDispatch();

    useEffect(() => {
        getPosts().then((data: any) => {
            setPosts(data.currentPage === 1 ? data.lists : [...posts, ...data.lists]); // 게시물들은 내려보냄
            // 현재 페이지
            dispatch({
                type: 'postSlice/POST_IN_PAGE',
                TOTAL: data.total,
                CURRENT_PAGE: data.currentPage,
            });
        });
    }, [getPosts]);

    return (
        <>
            <SearchBar />
            <ButtonGroup isLoggedIn={isLoggedIn} />
            <Community posts={posts} limit={limit} isLoggedIn={isLoggedIn} />
            <NavBar isLoggedIn={isLoggedIn} />
        </>
    );
}
