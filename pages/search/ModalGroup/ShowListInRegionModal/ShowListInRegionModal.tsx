import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { RestaurantListItem } from '../../ResultInRadius/RestaurantListItem';
import { Pagination } from '../../../../components/Pagination/Pagination';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import {
    RESET_LIST_IN_PAGE,
    RESET_TOTAL_IN_REGION,
    SET_LIST_IN_PAGE,
    SET_TOTAL_IN_REGION,
} from '../../../../renderer/_reducers/_slices/mapSlice';
import { moveToRegionInPage } from '../../kakaoApi';
import type { MongoLocation } from '../../kakaoApi/types';
import appModalMode from '../../../../components/modal/appModalMode';
import { SHOW_LIST_IN_REGION_MODAL } from '../../../../renderer/_reducers/_slices/mapSlice';

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

    const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);

    useEffect(() => {
        if (showListInRegionModalOn === true) setShow(true);
        else setShow(false);
    }, [showListInRegionModalOn]);

    useEffect(() => {
        if (show === true) {
            getListInRegion().then((data) => {
                // 좌표를 저장
                if (data.success && data.lists.length > 0) {
                    const coordsInPage: MongoLocation[] = [];
                    for (let list of data.lists) {
                        coordsInPage.push(list.location.coordinates);
                    }
                    // 카카오 index로 보내기
                    moveToRegionInPage(coordsInPage); // 페이지 넘길 때마다 위치변경
                    // 식당리스트 스토어에 저장
                    dispatch(SET_LIST_IN_PAGE(data.lists));
                    // 토탈 정보 저장 form 페이지네이션
                    dispatch(SET_TOTAL_IN_REGION(data.total));
                }
            });
        }
    }, [show, currentPage, selectedCategory]);

    async function getListInRegion() {
        const sido = selectedSido;
        const sigungu = selectedSigungu;

        const res = await fetch(`${API_URL}/map/region?sido=${sido}&sigungu=${sigungu}&page=${currentPage}&skip=10`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ category: selectedCategory }),
        });
        const data = await res.json();

        return data;
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>지역 탐색 결과({totalInRegion})</h4>
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
            <CloseButton />
        </article>
    );
}

import imgClose from '/images/icon-plus.svg';

function CloseButton() {
    const dispatch = useAppDispatch();

    function handleClose() {
        appModalMode(false);

        dispatch(SHOW_LIST_IN_REGION_MODAL(false));
        dispatch(RESET_LIST_IN_PAGE());
        dispatch(RESET_TOTAL_IN_REGION());
    }

    return (
        <button type="button" className="button-close" onClick={handleClose}>
            <img src={imgClose} alt="X 아이콘" className="img-close" />
        </button>
    );
}
