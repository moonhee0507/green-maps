import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TopBar } from '../../components/topBar/topBar';
import { HomeContent } from './homeContent';
import { NavBar } from '../../components/navBar';
import type { PageContext } from '../../renderer/types';

export { Page };

export const documentProps = {
    title: '홈 | Green Maps',
    description: '채식 식당 검색과 북마크는 그린 맵',
};

function Page(pageContext: PageContext) {
    // console.log(useSelector((state: RootState) => state));
    const { isLoggedIn, info } = pageContext.user;

    return (
        <>
            <TopBar title={'홈'} />
            <HomeContent />
            <NavBar isLoggedIn={isLoggedIn} />
        </>
    );
}
