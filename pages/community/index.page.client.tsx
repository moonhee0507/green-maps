import React, { useCallback, useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { Community } from './Community';
import { useDispatch } from 'react-redux';

export { Page };

function Page() {
    const [posts, setPosts] = useState<any>(null);
    const dispatch = useDispatch();

    const getPosts = useCallback(async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/posts/`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();

            return data;
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
            dispatch({ type: 'postSlice/POST_IN_PAGE', LIST: data.lists });
        });
    }, [getPosts]);

    return (
        <>
            <SearchBar />
            {posts ? <Community posts={posts} /> : <div>게시물이 없습니다.</div>}
        </>
    );
}
