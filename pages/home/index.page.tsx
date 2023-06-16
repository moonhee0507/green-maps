import React, { useEffect, useState } from 'react';
import LoadingMain from '../../components/Loading/LoadingMain';

export { Page };

export const documentProps = {
    title: '홈 | Green Maps',
    description: '채식 식당 검색과 북마크 서비스',
};

const HomeMain = React.lazy(() => import('./HomeMain'));

function Page() {
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTrigger(true);
        }, 5000);
    }, []);

    return trigger ? (
        <React.Suspense fallback={<LoadingMain />}>
            <HomeMain />
        </React.Suspense>
    ) : (
        <LoadingMain />
    );
}
