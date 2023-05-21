import React, { MouseEvent, useEffect, useState } from 'react';
import { UserInfo } from '../../../server/models/User';
import { PostList } from '../../community/search/ResultSection/PostList/PostList';
import { API_URL } from '../../API_URL/api';
import { Post } from '../../../server/models/Post';

export { MyCommunitySection };

function MyCommunitySection({ userInfo }: { userInfo: UserInfo }) {
    const [showSection, setShowSection] = useState<string>('post');
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [numPost, setNumPost] = useState<number>(0);
    const [numComment, setNumComment] = useState<number>(0);

    const { nickName } = userInfo;

    useEffect(() => {
        const $1 = window.localStorage.getItem('#1');
        const $2 = window.localStorage.getItem('#2');

        const arrSummary = ['작성한 글', '댓글 단 글'];
        const lists = Array.from(document.querySelectorAll('.list-summary-community'));

        if ($1 === '커뮤니티 활동' && $2) {
            lists[arrSummary.indexOf($2)].classList.add('on');
            setShowSection($2);
        } else {
            lists[0].classList.add('on');
        }

        getMyPost(nickName).then((data) => {
            if (data.success === true) {
                if (data.posts) {
                    setPosts(data.posts);
                    setNumPost(data.posts.length);
                } else setPosts(null);
            } else setPosts(null);
        });

        getMyComment(nickName).then((data) => {
            if (data.success === true) {
                if (data.posts) {
                    setPosts(data.posts);
                    setNumComment(data.posts.length);
                } else setPosts(null);
            } else setPosts(null);
        });
    }, []);

    async function getMyPost(nickName: string): Promise<{ success: boolean; posts?: Post[]; message?: string }> {
        const res = await fetch(`${API_URL}/posts/my?boundary=post&owner=${nickName}`);
        const data = await res.json();

        return data;
    }

    async function getMyComment(nickName: string): Promise<{ success: boolean; posts?: Post[]; message?: string }> {
        const res = await fetch(`${API_URL}/posts/my?boundary=comment&owner=${nickName}`);
        const data = await res.json();

        return data;
    }

    function handleClick(event: MouseEvent<HTMLElement>) {
        const clickedNode = event.currentTarget;
        const lists = Array.from(document.querySelectorAll('.list-summary-community'));

        lists.forEach((list) => list.classList.remove('on'));

        clickedNode.classList.add('on');

        setShowSection(clickedNode.innerText);

        if (clickedNode.lastElementChild?.innerHTML) {
            window.localStorage.setItem('#2', clickedNode.lastElementChild?.innerHTML);
        }
    }

    return (
        <section>
            <h3 className="sr-only">내가 쓴 게시글 및 댓글</h3>
            <ul className="ul-summary-community">
                <li className="list-summary-community" onClick={handleClick}>
                    <p>{numPost}</p>
                    <p>작성한 글</p>
                </li>
                <li className="list-summary-community" onClick={handleClick}>
                    <p>{numComment}</p>
                    <p>댓글 단 글</p>
                </li>
            </ul>
            {posts && posts.length > 0 ? (
                (() => {
                    switch (showSection) {
                        case 'post':
                            return <PostList posts={posts} limit={20} />;
                        case 'comment':
                            return <PostList posts={posts} limit={20} />;
                        default:
                            return <PostList posts={posts} limit={20} />;
                    }
                })()
            ) : (
                <div className="style-wrapper-no-review">
                    <div className="txt-no-review">😭</div>
                    <p>작성한 게시물이 없어요.</p>
                </div>
            )}
        </section>
    );
}
