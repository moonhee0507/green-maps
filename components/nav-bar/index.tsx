import React from 'react';
import icon_home from '/icon-home.svg';
import icon_search from '/icon-search.svg';
import icon_bookmark from '/icon-bookmark.svg';
import icon_community from '/icon-community.svg';
import icon_user from '/icon-user.svg';

export { NavBar };

function NavBar() {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <a href="/" className="link-nav">
                        <div className="img-nav-icon home" />
                        <span>홈</span>
                    </a>
                </li>
                <li>
                    <a href="/search" className="link-nav">
                        <div className="img-nav-icon search" />
                        <span>식당검색</span>
                    </a>
                </li>
                <li>
                    <a href="/bookmark" className="link-nav">
                        <div className="img-nav-icon bookmark" />
                        <span>북마크</span>
                    </a>
                </li>
                <li>
                    <a href="/community" className="link-nav">
                        <div className="img-nav-icon community" />
                        <span>커뮤니티</span>
                    </a>
                </li>
                <li>
                    <a href="/login" className="link-nav">
                        <div className="img-nav-icon user" />
                        <span>로그인</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
