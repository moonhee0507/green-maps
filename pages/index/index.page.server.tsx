import React from 'react';
import { HomeContent } from './homeContent';

export { Page };

export const documentProps = {
    title: '홈 | Green Maps',
    description: '채식 식당 검색과 북마크는 그린 맵',
};

function Page() {
    return (
        <>
            <HomeContent />
        </>
    );
}
