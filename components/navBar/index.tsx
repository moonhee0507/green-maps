import React from 'react';
import { Link } from '../../renderer/Link';

export function NavBar({ isLoggedIn }: { isLoggedIn: boolean }) {
    const checkLogin = () => {
        if (!isLoggedIn) {
            const message = '로그인이 필요한 서비스입니다.\n로그인하시겠습니까?';

            if (typeof window !== 'undefined' && window.confirm(message)) {
                window.location.href = '/login';
            }
        }
    };

    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <a href="/" className="link-nav">
                        <em>홈</em>
                    </a>
                </li>
                <li>
                    <a href="/search" className="link-nav">
                        <em>식당검색</em>
                    </a>
                </li>
                <li>
                    {isLoggedIn ? (
                        <a href="/my-lists" className="link-nav">
                            <em>북마크</em>
                        </a>
                    ) : (
                        <button
                            type="button"
                            className="link-nav no-login"
                            style={{ width: '100%', border: '0' }}
                            onClick={checkLogin}
                        >
                            <em>북마크</em>
                        </button>
                    )}
                </li>
                <li>
                    <a href="/community" className="link-nav">
                        <em>커뮤니티</em>
                    </a>
                </li>
                <li>
                    {isLoggedIn ? (
                        <a href="/my" className="link-nav my">
                            <em>내 정보</em>
                        </a>
                    ) : (
                        <a href="/login" className="link-nav">
                            <em>로그인</em>
                        </a>
                    )}
                </li>
            </ul>
        </nav>
    );
}
