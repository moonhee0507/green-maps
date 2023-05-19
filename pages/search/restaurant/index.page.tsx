import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { RestaurantDetail } from './RestaurantDetail/RestaurantDetail';
import { NavBar } from '../../../components/navBar';
import { API_URL } from '../../API_URL/api';
import type { PageProps } from '../../../renderer/types';

export { Page };

function Page(pageProps: PageProps) {
    const restaurantInfo = pageProps.restaurantInfo;
    const reviews = pageProps.reviews.review;

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        checkTokenInBrowser().then((data) => {
            if (data.success === true) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, []);

    return (
        <>
            <TopBar title="상세정보" />
            <RestaurantDetail restaurantInfo={restaurantInfo} reviews={reviews} isLoggedIn={isLoggedIn} />
            <NavBar isLoggedIn={isLoggedIn} />
        </>
    );
}

async function checkTokenInBrowser() {
    try {
        const res = await fetch(`${API_URL}/users`);
        const data = await res.json();
        return data; // { success: boolean, user: UserInfo }
    } catch (err) {
        console.error(err);
    }
}
