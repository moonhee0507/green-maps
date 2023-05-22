import React from 'react';
import { Link } from '../../renderer/Link';

export function NavBar({ isLoggedIn }: { isLoggedIn: boolean }) {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link href="/" className="link-nav">
                        <i className="img-nav-icon home" />
                        <span>홈</span>
                    </Link>
                </li>
                <li>
                    <Link href="/search" className="link-nav">
                        <i className="img-nav-icon search" />
                        <span>식당검색</span>
                    </Link>
                </li>
                <li>
                    <Link href="/my-lists" className="link-nav">
                        <i className="img-nav-icon bookmark" />
                        <span>북마크</span>
                    </Link>
                </li>
                <li>
                    <Link href="/community" className="link-nav">
                        <i className="img-nav-icon community" />
                        <span>커뮤니티</span>
                    </Link>
                </li>
                <li>
                    {isLoggedIn ? (
                        <Link href="/my" className="link-nav">
                            <i className="img-nav-icon user" />
                            <span>내 정보</span>
                        </Link>
                    ) : (
                        <Link href="/login" className="link-nav">
                            <i className="img-nav-icon user" />
                            <span>로그인</span>
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}
