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
    const currentLocation = useAppSelector((state) => state.mapSlice.currentLocation);

    const [searchListInPage, setSearchListInPage] = useState<Restaurant[]>([]);
    const [total, setTotal] = useState<number | null>(null);
    const [perPage, _] = useState(20);

    useEffect(() => {
        getListWithKeyword().then((data) => {
            if (data.success) {
                dispatch(SET_SEARCH_RESULT_IN_PAGE(data.lists));
                setSearchListInPage(data.lists);
                setTotal(data.total);
            }
        });
    }, [currentPage, selectedCategory, selectedCert, orderBy, currentLocation]);

    const getListWithKeyword = useCallback(async () => {
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
                    currentLocation: [currentLocation[1], currentLocation[0]],
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
    }, [currentPage, selectedCategory, selectedCert, orderBy, currentLocation]);

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
