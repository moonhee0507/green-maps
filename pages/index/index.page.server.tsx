import React, { useEffect } from 'react';
import fetch from 'node-fetch';
import { HomeContent } from './homeContent';
import { useSelector } from 'react-redux';
import { TopBar } from '../../components/topBar/topBar';
import type { RootState } from '../../renderer/store';
import { PageContext } from '../../renderer/types';

export { Page };

export const documentProps = {
    title: '홈 | Green Maps',
    description: '채식 식당 검색과 북마크는 그린 맵',
};

function Page(pageContext: PageContext) {
    // console.log(useSelector((state: RootState) => state));
    const { token } = pageContext;

    checkToken(token);

    async function checkToken(token: string | undefined) {
        await fetch(`http://localhost:5000/api/users/check-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token }),
        })
            .then((res) => res.json())
            .then((data: any) => {
                /**
                 * !홈화면에서 토큰검증한 결과
                 * { auth: boolean, message: string, user: User }
                 */
                console.log(data);
            });
    }

    return (
        <>
            <TopBar title={'홈'} />
            <HomeContent />
        </>
    );
}
