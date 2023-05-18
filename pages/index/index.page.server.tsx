import React, { useEffect, useState } from 'react';

import fetch from 'node-fetch';
import { TopBar } from '../../components/topBar/topBar';
import { HomeContent } from './homeContent';
import type { PageContext } from '../../renderer/types';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
    /**
     * @token {string}
     * @user { isLoggedIn: boolean } (default: false)
     */
    const { token, user } = pageContext;

    try {
        const res = await fetch(`http://localhost:5000/api/users/check-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token }),
        });

        const authInfo: any = await res.json();

        return {
            pageContext: {
                user: {
                    isLoggedIn: authInfo.auth || false,
                    info: authInfo.auth ? authInfo.user : null,
                },
            },
        };
    } catch (err) {
        console.error(err);
    }
}

import { useSelector } from 'react-redux';
import type { RootState } from '../../renderer/store';
import { NavBar } from '../../components/navBar';

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
