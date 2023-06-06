import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { RestaurantListItem } from '../../ResultInRadius/RestaurantListItem';
import { Pagination } from '../../../../components/Pagination/Pagination';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import { SET_LIST_IN_PAGE } from '../../../../renderer/_reducers/_slices/mapSlice';
import { moveToRegionInPage } from '../../kakaoApi';
import type { MongoLocation } from '../../kakaoApi/types';

export { ShowListInRegionModal };

function ShowListInRegionModal() {
    const dispatch = useAppDispatch();

    const [show, setShow] = useState(false);
    const showListInRegionModalOn = useAppSelector((state) => state.mapSlice.showListInRegionModalOn);
    const listInPage = useAppSelector((state) => state.mapSlice.listInPage);
    const totalInRegion = useAppSelector((state) => state.mapSlice.totalInRegion);

    const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
    const selectedSido = useAppSelector((state) => state.mapSlice.selectedSido);
    const selectedSigungu = useAppSelector((state) => state.mapSlice.selectedSigungu);

    useEffect(() => {
        if (showListInRegionModalOn === true) setShow(true);
        else setShow(false);
    }, [showListInRegionModalOn]);

    useEffect(() => {
        getListInRegion().then((data) => {
            // 좌표를 저장
            if (data.success && data.lists.length > 0) {
                const coordsInPage: MongoLocation[] = [];

                for (let list of data.lists) {
                    coordsInPage.push(list.location.coordinates);
                }

                // 카카오 index로 보내기
                moveToRegionInPage(coordsInPage); // 페이지 넘길 때마다 지도 변경할거면. 해제.

                // 식당리스트 스토어에 저장
                dispatch(SET_LIST_IN_PAGE(data.lists));
            }
        });
    }, [currentPage]);

    async function getListInRegion() {
        const sido = selectedSido;
        const sigungu = selectedSigungu;

        const res = await fetch(`${API_URL}/map/region?sido=${sido}&sigungu=${sigungu}&page=${currentPage}&skip=10`);
        const data = await res.json();

        return data;
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>지역 검색 결과</h4>
            <div className="wrapper-result-in-radius reuse-in-region">
                {listInPage.length > 0 ? (
                    <ul className="ul-restaurant-in-radius reuse-in-region">
                        {listInPage.map((list, i) => {
                            return <RestaurantListItem key={Math.random()} restaurantInfo={list} isFirst={i === 0} />;
                        })}
                    </ul>
                ) : (
                    <div className="style-wrapper-no-review">
                        <div className="txt-no-review">😭</div>
                        <p>목록이 없어요.</p>
                    </div>
                )}
            </div>
            <Pagination count={totalInRegion} perPage={10} />
        </article>
    );
}
