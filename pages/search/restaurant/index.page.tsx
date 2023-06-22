import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { NavBar } from '../../../components/navBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import { useCheckLoginStatus } from '../../../renderer/_hooks/useCheckLoginStatus';
import LoadingMain from '../../../components/Loading/LoadingMain';
import type { PageContext } from '../../../renderer/types';
import type { Restaurant } from '../../../server/models/Restaurant';

export const documentProps = {
    title: '채식 식당 검색 | Green Maps',
    description: '채식 식당 지도 검색 페이지',
};

const RestaurantDetail = React.lazy(() => import('./RestaurantDetail/RestaurantDetail'));

export { Page };

function Page(pageContext: PageContext) {
    const { routeParams } = pageContext;

    const [isLoggedIn, userInfo] = useCheckLoginStatus();
    const restaurantId = pageContext.routeParams?.restaurantId || '';

    const [restaurantInfo, setRestaurantInfo] = useState<Restaurant | null>(null);

    useEffect(() => {
        getRestaurantList();
    }, [routeParams]);

    async function getRestaurantList() {
        const res = await fetch(`${API_URL}/restaurants/${restaurantId}`);
        const data = (await res.json()) as { success: boolean; restaurantInfo: Restaurant; totalReview: number };

        if (data.success) {
            setRestaurantInfo(data.restaurantInfo);
        }
    }
    return (
        <>
            <TopBar title="상세정보" />
            <React.Suspense fallback={<LoadingMain />}>
                <RestaurantDetail restaurantInfo={restaurantInfo} isLoggedIn={isLoggedIn} userInfo={userInfo} />
            </React.Suspense>
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup />
        </>
    );
}
