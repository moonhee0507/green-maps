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
    useEffect(() => {
        const app = document.querySelector('.app');

        try {
            const LoadingElement = () => {
                const imgElement = document.createElement('img');

                imgElement.src = imgLoading;
                imgElement.alt = '좌표 생성 로딩';
                imgElement.style.width = '50px';
                imgElement.style.position = 'absolute';
                imgElement.style.top = '50%';
                imgElement.style.left = '50%';
                imgElement.style.transform = 'translate(-50%, -50%)';
                imgElement.id = '__LOADING__';

                return imgElement;
            };

            setTimeout(() => {
                if (app !== null) {
                    app.appendChild(LoadingElement());
                }
            }, 5000);
        } catch (error) {
        } finally {
            if (app) {
                const LoadingElement = document.getElementById('__LOADING__');
                if (LoadingElement) {
                    app.removeChild(LoadingElement);
                }
            }
        }
    }, []);

    return (
        <React.Suspense fallback={<LoadingMain />}>
            <HomeMain />
        </React.Suspense>
    );
}
