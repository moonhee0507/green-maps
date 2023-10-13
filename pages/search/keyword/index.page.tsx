import React, { useCallback, useEffect, useState } from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { PageContext } from '../../../renderer/types';
import { NavBar } from '../../../components/navBar';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import { Restaurant } from '../../../server/models/Restaurant';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import { KeywordSearchResultMain } from './KeywordSearchResultMain/KeywordSearchResultMain';
import { useCheckLoginStatus } from '../../../renderer/_hooks/useCheckLoginStatus';
import { SET_SEARCH_RESULT_IN_PAGE } from '../../../renderer/_reducers/_slices/mapSlice';

export const documentProps = {
    title: '채식 식당 검색 결과 | Green Maps',
    description: '채식 식당 지도 검색 페이지',
};

export { Page };

function Page(pageContext: PageContext) {
    const dispatch = useAppDispatch();
    const [isLoggedIn, __] = useCheckLoginStatus();

    const keyword = pageContext.routeParams?.keyword ?? '';
    const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
    const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);
    const selectedCert = useAppSelector((state) => state.mapSlice.selectedCert);
    const orderBy = useAppSelector((state) => state.mapSlice.resultOrderBy);

    const [currentLocation, setCurrentLocation] = useState<number[] | null>(null);
    const [searchListInPage, setSearchListInPage] = useState<Restaurant[]>([]);
    const [total, setTotal] = useState<number | null>(null);
    const [perPage, _] = useState(20);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation([longitude, latitude]);
            })
        }
    }, []);

    useEffect(() => {
        if (currentLocation !== null) {
            getListWithKeyword().then((data) => {
                if (data.success) {
                    dispatch(SET_SEARCH_RESULT_IN_PAGE(data.lists));
                    setSearchListInPage(data.lists);
                    setTotal(data.total);
                }
            });
        }
    }, [keyword, currentPage, perPage, orderBy, selectedCategory, selectedCert, currentLocation]);

    const getListWithKeyword = useCallback(async () => {
        if (currentLocation === null) return {
            success: false,
            lists: [],
            total: 0
        };
        
        const res = await fetch(
            `${API_URL}/search/?keyword=${keyword}&page=${currentPage}&limit=${perPage}&orderBy=${orderBy}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    category: selectedCategory,
                    cert: selectedCert,
                    currentLocation,
                }),
            }
        );
        const data = (await res.json()) as {
            success: boolean;
            total: number;
            currentPage: number;
            perPage: number;
            lists: Restaurant[];
        };

        return data;
    }, [keyword, currentPage, perPage, orderBy, selectedCategory, selectedCert, currentLocation]);

    return (
        <>
            <TopBar title={`${keyword} 🔍`} />
            <KeywordSearchResultMain
                keyword={keyword}
                total={total}
                perPage={perPage}
                searchListInPage={searchListInPage}
            />
            <NavBar isLoggedIn={isLoggedIn} />
        </>
    );
}
