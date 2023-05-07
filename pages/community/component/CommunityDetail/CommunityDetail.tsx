import React, { useEffect, useState } from 'react';
import { SubjectBox } from './SubjectBox';
import type { Post } from '../../../../server/models/Post';

export { CommunityDetail };

function CommunityDetail(props: { total: number; posts: Array<Post> }) {
    const { total, posts } = props;
    const [todayCount, setTodayCount] = useState<number>(0);

    useEffect(() => {
        getTodayCount().then((res: { todayCount: number }) => setTodayCount(res.todayCount));

        async function getTodayCount() {
            const res = await fetch(`http://localhost:5000/api/posts/today`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const count = await res.json();
            return count;
        }
    }, [posts]);

    return (
        <div className="container-newpost-selectbox">
            <p className="txt-postinfo">
                새글 <span>{todayCount}</span>/{total}
            </p>
            <SubjectBox from="글 쓰기" />
        </div>
    );
}
