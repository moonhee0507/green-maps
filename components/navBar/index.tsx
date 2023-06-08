import React, { useEffect } from 'react';
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
                    <Link href="/" className="link-nav">
                        <em>홈</em>
                    </Link>
                </li>
                <li>
                    <Link href="/search" className="link-nav">
                        <em>식당검색</em>
                    </Link>
                </li>
                <li>
                    {isLoggedIn ? (
                        <Link href="/my-lists" className="link-nav">
                            <em>북마크</em>
                        </Link>
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
                    <Link href="/community" className="link-nav">
                        <em>커뮤니티</em>
                    </Link>
                </li>
                <li>
                    {isLoggedIn ? (
                        <Link href="/my" className="link-nav">
                            <em>내 정보</em>
                        </Link>
                    ) : (
                        <Link href="/login" className="link-nav">
                            <em>로그인</em>
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}
