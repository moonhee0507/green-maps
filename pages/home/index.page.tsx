import React from 'react';
import LoadingMain from '../../components/Loading/LoadingMain';

export { Page };

export const documentProps = {
    title: '홈 | Green Maps',
    description: '채식 식당 검색과 북마크 서비스',
};

const HomeMain = React.lazy(() => import('./HomeMain'));

function Page() {
    return (
        <React.Suspense fallback={<LoadingMain />}>
            <HomeMain />
        </React.Suspense>
    );
}
