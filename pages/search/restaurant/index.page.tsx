import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { NavBar } from '../../../components/navBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import type { PageContext } from '../../../renderer/types';
import type { Restaurant } from '../../../server/models/Restaurant';

const RestaurantDetail = React.lazy(() => import('./RestaurantDetail/RestaurantDetail'));

export { Page };

function Page(pageContext: PageContext) {
    const { routeParams, user } = pageContext;

    const restaurantId = pageContext.routeParams?.restaurantId || '';
    // const { isLoggedIn, info } = user;

    const [restaurantInfo, setRestaurantInfo] = useState<Restaurant | null>(null);

    useEffect(() => {
        getRestaurantList();
    }, [routeParams]);

    async function getRestaurantList() {
        const res = await fetch(`${API_URL}/restaurants/${restaurantId}`, {
            headers: {
                'Cache-Control': 'max-age=31536000',
            },
        });
        const data = (await res.json()) as { success: boolean; restaurantInfo: Restaurant; totalReview: number };

        if (data.success) {
            setRestaurantInfo(data.restaurantInfo);
        }
    }
    return (
        <>
            <TopBar title="상세정보" />
            <React.Suspense fallback={<Loading />}>
                <RestaurantDetail
                    restaurantInfo={restaurantInfo}
                    isLoggedIn={pageContext.user ? pageContext.user.isLoggedIn : false}
                    userInfo={pageContext.user ? pageContext.user.info : null}
                />
            </React.Suspense>
            <NavBar isLoggedIn={pageContext.user ? pageContext.user.isLoggedIn : false} />
            <ModalGroup />
        </>
    );
}

function Loading() {
    return <div>로딩중...</div>;
}
