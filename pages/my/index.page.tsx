import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { NavBar } from '../../components/navBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { useCheckLoginStatus } from '../../renderer/_hooks/useCheckLoginStatus';
import LoadingMain from '../../components/Loading/LoadingMain';
import type { PageContext } from '../../renderer/types';
import { Review } from '../../server/models/Review';
import { API_URL } from '../../renderer/CONSTANT_URL';

export const documentProps = {
    title: '내 정보 | Green Maps',
    description: '채식 식당 지도 서비스 마이 페이지',
};

// const res = await fetch(`${API_URL}/reviews/my?owner=${typeof user !== 'undefined' ? user.info?.userId : null}`);

//     if (res.ok) {
//         const data = (await res.json()) as { success: boolean; reviews: Review[] };

//         return {
//             pageContext: {
//                 user: user,
//                 reviews: data.reviews,
//             },
//         };
//     }

const MyMain = React.lazy(() => import('./MyMain'));

export function Page(pageContext: PageContext) {
    const [isLoggedIn, info] = useCheckLoginStatus();
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        try {
            getMyReviews().then((data) => {
                if (data.success) {
                    setReviews(data.reviews);
                } else {
                    setReviews([]);
                }
            });
        } catch (err) {
            console.error(err);
        }
    }, []);

    async function getMyReviews() {
        const res = await fetch(`${API_URL}/reviews/my?owner=${info !== null ? info.userId : null}`);
        const data = (await res.json()) as { success: boolean; reviews: Review[] };

        return data;
    }
    // const { reviews } = pageContext;

    return isLoggedIn && info ? (
        <>
            <TopBar title="내 정보" />
            <React.Suspense fallback={<LoadingMain />}>
                <MyMain userInfo={info} reviews={reviews} />
            </React.Suspense>
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup />
        </>
    ) : (
        <LoadingMain />
    );
}
