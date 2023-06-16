import React, { useEffect, useState } from 'react';
import LoadingMain from '../../components/Loading/LoadingMain';
import imgLoading from '/images/spinner.gif';

export { Page };

export const documentProps = {
    title: '홈 | Green Maps',
    description: '채식 식당 검색과 북마크 서비스',
};

const HomeMain = React.lazy(() => import('./HomeMain'));

function Page() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <React.Suspense fallback={<LoadingMain />}>
            {isLoading ? (
                <div
                    style={{
                        width: '50px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <img src={imgLoading} alt="좌표 생성 로딩" style={{ width: '100%' }} id="__LOADING__" />
                </div>
            ) : (
                <HomeMain />
            )}
        </React.Suspense>
    );
}
