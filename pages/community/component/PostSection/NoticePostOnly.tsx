import React, { useEffect, useRef, useState } from 'react';
import { API_URL } from '../../../CONSTANT_URL';
import type { Post } from '../../../../server/models/Post';
import { preview } from 'vite';

export { NoticePostOnly };

function NoticePostOnly() {
    const [notices, setNotices] = useState<Post[] | null>(null);

    const ulElement = useRef<HTMLUListElement>(null);

    useEffect(() => {
        getNotice().then((data) => {
            if (data.total >= 1) {
                setNotices(data.lists);
            } else {
                setNotices(null);
            }
        });
    }, []);

    async function getNotice() {
        const subjectName = '공지사항';

        const res = await fetch(`${API_URL}/subjects/${encodeURIComponent(subjectName)}`, {
            headers: {
                'Cache-Control': 'max-age=31536000',
            },
        });
        const data = await res.json();

        return data;
    }

    return (
        <article className="article-notice">
            <h3 className="sr-only">공지사항</h3>
            {notices !== null ? (
                <ul className="ul-notice" ref={ulElement}>
                    {notices.map((notice, index) => {
                        return <NoticeListItem key={Math.random()} posts={notice} />;
                    })}
                </ul>
            ) : null}
        </article>
    );
}

function NoticeListItem({ posts }: { posts: Post }) {
    const { _id, title, registeredAt, updatedAt } = posts;

    // 1줄 말줄임 처리하기
    return (
        <li className="li-notice">
            <a href={`/community/${_id}`}>
                <p className="txt-title">
                    <span>[공지사항] </span>
                    <em>{title}</em>
                </p>
            </a>
        </li>
    );
}
