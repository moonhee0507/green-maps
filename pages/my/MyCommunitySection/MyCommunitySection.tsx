import React, { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { PostList } from '../../community/search/ResultSection/PostList/PostList';
import { API_URL } from '../../CONSTANT_URL';
import type { UserInfo } from '../../../server/models/User';
import type { Post } from '../../../server/models/Post';

const arrSummary = ['작성한 글', '댓글 단 글'];

export function MyCommunitySection({ userInfo }: { userInfo: UserInfo }) {
    const [showSection, setShowSection] = useState<string>(window.localStorage.getItem('#2') || '작성한 글');
    const [posts, setPosts] = useState<Post[] | null>(null);

    const [summaryCounts, setSummaryCounts] = useState<{ [key: string]: number }>({ 작성한글: 0, 댓글단글: 0 });

    const { nickName } = userInfo;

    const listsRef = useRef<Array<HTMLLIElement | null>>([]);

    useEffect(() => {
        const $2 = window.localStorage.getItem('#2');
        const lists = [...document.querySelectorAll('.list-summary-community')] as Array<HTMLLIElement>;

        listsRef.current = lists;

        if ($2) {
            const index = arrSummary.indexOf($2);

            if (index !== -1) {
                lists[index].classList.add('on');
                setShowSection($2);
            }
        } else {
            lists[0].classList.add('on');
            setShowSection('작성한 글');
        }

        getMyPost(nickName).then((data) => {
            setSummaryCounts((prevCounts) => ({
                ...prevCounts,
                작성한글: data.posts.length,
            }));
        });

        getMyComment(nickName).then((data) => {
            setSummaryCounts((prevCounts) => ({
                ...prevCounts,
                댓글단글: data.posts.length,
            }));
        });
    }, []);

    useEffect(() => {
        if (showSection === '작성한 글') {
            getMyPost(nickName).then((data) => {
                if (data.success === true) {
                    if (data.posts) {
                        setPosts(data.posts);
                    } else setPosts(null);
                } else setPosts(null);
            });
        } else if (showSection === '댓글 단 글') {
            getMyComment(nickName).then((data) => {
                if (data.success === true) {
                    if (data.posts) {
                        setPosts(data.posts);
                    } else setPosts(null);
                } else setPosts(null);
            });
        }
    }, [showSection]);

    function initializeListStyle() {
        listsRef.current.forEach((list) => {
            if (list) list.classList.remove('on');
        });
    }

    const getMyPost = useCallback(async (nickName: string) => {
        const res = await fetch(`${API_URL}/posts/my?boundary=post&owner=${nickName}`);
        const data = await res.json();

        return data;
    }, []);

    const getMyComment = useCallback(async (nickName: string) => {
        const res = await fetch(`${API_URL}/posts/my?boundary=comment&owner=${nickName}`);
        const data = await res.json();

        return data;
    }, []);

    function handleListClick(event: MouseEvent<HTMLElement>, type: string) {
        const clickedNode = event.currentTarget;

        initializeListStyle();
        clickedNode.classList.add('on');

        if (type === '작성한 글') {
            getMyPost(nickName).then((data) => {
                if (data.success === true) {
                    if (data.posts) {
                        setPosts(data.posts);
                    } else {
                        setPosts(null);
                    }
                } else {
                    setPosts(null);
                }
            });
        } else if (type === '댓글 단 글') {
            getMyComment(nickName).then((data) => {
                if (data.success === true) {
                    if (data.posts) {
                        setPosts(data.posts);
                    } else {
                        setPosts(null);
                    }
                } else {
                    setPosts(null);
                }
            });
        }

        if (clickedNode.lastElementChild?.innerHTML) {
            window.localStorage.setItem('#2', clickedNode.lastElementChild?.innerHTML);
        }
    }

    return (
        <section>
            <h3 className="sr-only">내가 쓴 게시글 및 댓글</h3>
            <ul className="ul-summary-community">
                <li
                    className={`list-summary-community ${showSection === '작성한 글' ? 'on' : ''}`}
                    onClick={(event) => handleListClick(event, '작성한 글')}
                >
                    <p>{summaryCounts['작성한글']}</p>
                    <p>작성한 글</p>
                </li>
                <li
                    className={`list-summary-community ${showSection === '댓글 단 글' ? 'on' : ''}`}
                    onClick={(event) => handleListClick(event, '댓글 단 글')}
                >
                    <p>{summaryCounts['댓글단글']}</p>
                    <p>댓글 단 글</p>
                </li>
            </ul>
            {posts && posts.length > 0 ? (
                <PostList posts={posts} limit={20} />
            ) : (
                <div className="style-wrapper-no-review">
                    <div className="txt-no-review">😭</div>
                    <p>목록이 없어요.</p>
                </div>
            )}
        </section>
    );
}
