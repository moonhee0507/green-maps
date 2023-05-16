import React, { useEffect, useState } from 'react';

import fetch from 'node-fetch';
import { TopBar } from '../../components/topBar/topBar';
import { HomeContent } from './homeContent';
import { NavBar } from '../../components/navBar';
import type { PageContext } from '../../renderer/types';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
    const { token } = pageContext;
    try {
        const res = await fetch(`http://localhost:5000/api/users/check-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token }),
        });

        const authInfo: any = await res.json();
        const user = authInfo.user;

        const pageProps = { user };

        return {
            pageContext: { pageProps },
        };
    } catch (err) {
        console.error(err);
    }
}

import { useSelector } from 'react-redux';
import type { RootState } from '../../renderer/store';

export { Page };

export const documentProps = {
    title: '홈 | Green Maps',
    description: '채식 식당 검색과 북마크는 그린 맵',
};

function Page(pageContext: PageContext) {
    // console.log(useSelector((state: RootState) => state));
    const { token, user } = pageContext;

    return (
        <>
            <TopBar title={'홈'} />
            <HomeContent />
            <NavBar user={user} />
        </>
    );
}
