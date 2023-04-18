import React from 'react';
import { Link } from '../../renderer/Link';

export { NavBar };

function NavBar() {
    const base = import.meta.env.BASE_URL;

    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link href={base} className="link-nav">
                        <i className="img-nav-icon home" />
                        <span>홈</span>
                    </Link>
                </li>
                <li>
                    <Link href={base + 'search'} className="link-nav">
                        <i className="img-nav-icon search" />
                        <span>식당검색</span>
                    </Link>
                </li>
                <li>
                    <Link href={base + 'bookmark'} className="link-nav">
                        <i className="img-nav-icon bookmark" />
                        <span>북마크</span>
                    </Link>
                </li>
                <li>
                    <Link href={base + 'community'} className="link-nav">
                        <i className="img-nav-icon community" />
                        <span>커뮤니티</span>
                    </Link>
                </li>
                <li>
                    <Link href={base + 'login'} className="link-nav">
                        <i className="img-nav-icon user" />
                        <span>로그인</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
