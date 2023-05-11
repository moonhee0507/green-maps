import React, { useEffect, useState } from 'react';
import { SubjectBox } from './SubjectBox';
import { useSelector } from 'react-redux';
import type { Post } from '../../../../server/models/Post';
import type { RootState } from '../../../../renderer/store';

export { CommunityDetail };

function CommunityDetail(props: { posts: Array<Post> }) {
    const total = useSelector((state: RootState) => state.postSlice.post.TOTAL);
    const subject = useSelector((state: RootState) => state.postSlice.SUBJECT);

    const [todayCount, setTodayCount] = useState<number>(0);

    useEffect(() => {
        getTodayCount(subject).then((res: { todayCount: number }) => setTodayCount(res.todayCount));

        async function getTodayCount(subjectName: string) {
            const encodeSubjectName = encodeURIComponent(subjectName);
            const res = await fetch(`http://localhost:5000/api/today/${encodeSubjectName}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const count = await res.json();
            return count;
        }
    }, [props.posts]);

    return (
        <div className="container-newpost-selectbox">
            <p className="txt-postinfo">
                새글 <span>{todayCount}</span>/{total}
            </p>
            <SubjectBox from="글 쓰기" />
        </div>
    );
}
