import React from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { RestaurantDetail } from './RestaurantDetail/RestaurantDetail';
import { NavBar } from '../../../components/navBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import type { PageContext } from '../../../renderer/types';

export { Page };

function Page(pageContext: PageContext) {
    const { restaurantInfo, user } = pageContext;
    const { isLoggedIn, info } = user;

    return (
        <>
            <TopBar title="상세정보" />
            <RestaurantDetail restaurantInfo={restaurantInfo} isLoggedIn={isLoggedIn} userInfo={info} />
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup />
        </>
    );
}
