import React, { useEffect, useState } from 'react';
import { Link } from '../../renderer/Link';
import { PageContext } from '../../renderer/types';

export { NavBar };

function NavBar({ user }: { user: any }) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(user ? true : false);

    useEffect(() => {
        console.log('내비게이션 바에 전달된 user 객체: ', user);
        setIsLoggedIn(user ? true : false);
    }, [user]);

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
                    <Link href="/bookmark" className="link-nav">
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
                    <Link href="/login" className="link-nav">
                        <i className="img-nav-icon user" />
                        <span>{isLoggedIn ? '내 정보' : '로그인'}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
