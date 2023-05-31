import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { ReviewPagination, SET_REVIEW } from '../../../renderer/_reducers/_slices/paginationSlice';
import { TopBar } from '../../../components/topBar/topBar';
import { RestaurantDetail } from './RestaurantDetail/RestaurantDetail';
import { NavBar } from '../../../components/navBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { API_URL } from '../../API_URL/api';
import type { PageContext } from '../../../renderer/types';
import type { UserInfo } from '../../../server/models/User';

export { Page };

function Page(pageContext: PageContext) {
    const dispatch = useAppDispatch();

    const { restaurantInfo } = pageContext;

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${API_URL}/users`);
                const data = await res.json(); // { success: boolean, user: UserInfo }

                if (data.success === true) {
                    setIsLoggedIn(true);
                    setUserInfo(data.user);
                } else {
                    setIsLoggedIn(false);
                    setUserInfo(null);
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    useEffect(() => {
        // TODO: 리뷰 페이지네이션 테스트하기
        const { reviews } = restaurantInfo;

        // 리뷰 페이지 네이션을 위해 스토어에 저장
        const obj: ReviewPagination = {};

        const newReviews = [...reviews].reverse();
        console.log('newReviews', newReviews);

        for (let i = 0; i < newReviews.length; i += 5) {
            const arrPerPage = newReviews.slice(i, i + 5);
            obj[i / 5] = arrPerPage;
        }

        dispatch(SET_REVIEW(obj));
    }, [restaurantInfo]);

    return (
        <>
            <TopBar title="상세정보" />
            <RestaurantDetail restaurantInfo={restaurantInfo} isLoggedIn={isLoggedIn} userInfo={userInfo} />
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup />
        </>
    );
}
