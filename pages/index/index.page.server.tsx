import React from 'react';
import { NavBar } from '../../components/nav-bar';

export { Page };

export const documentProps = {
    title: '홈 | Green Maps',
    description: '채식 식당 검색과 북마크는 그린 맵',
};

function Page() {
    return (
        <>
            <h1>홈 화면</h1>
            <p>인스타그램에서 검색되는 채식 식당</p>
            <NavBar />
        </>
    );
}
