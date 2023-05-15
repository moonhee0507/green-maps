import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import { HomeContent } from './homeContent';
import { useSelector } from 'react-redux';
import { TopBar } from '../../components/topBar/topBar';
import type { RootState } from '../../renderer/store';
import { PageContext } from '../../renderer/types';
import { NavBar } from '../../components/navBar';

export { Page };

export const documentProps = {
    title: '홈 | Green Maps',
    description: '채식 식당 검색과 북마크는 그린 맵',
};

function Page(pageContext: PageContext) {
    // console.log(useSelector((state: RootState) => state));
    const { token, user } = pageContext;

    // const [isLoggedIn] = useState<boolean>(user ? true : false);

    return (
        <>
            <TopBar title={'홈'} />
            <HomeContent />
            <NavBar user={user} />
        </>
    );
}
