import React from 'react';
import { HomeContent } from './homeContent';
import { useSelector } from 'react-redux';
import { TopBar } from '../../components/topBar/topBar';
import { RootState } from '../../renderer/store';

export { Page };

export const documentProps = {
    title: '홈 | Green Maps',
    description: '채식 식당 검색과 북마크는 그린 맵',
};

function Page() {
    console.log(useSelector((state: RootState) => state));

    return (
        <>
            <TopBar title={'홈'} />
            <HomeContent />
        </>
    );
}
