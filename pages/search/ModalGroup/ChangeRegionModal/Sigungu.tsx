import React, { useCallback, useEffect, useState } from 'react';
import REGION from '../../../../components/region/REGION.js';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import {
    CHANGE_REGION_MODAL,
    NO_RESULT_MODAL,
    SET_LIST_IN_PAGE,
    SET_SELECTED_SIGUNGU,
    SET_TOTAL_IN_REGION,
    SHOW_LIST_IN_REGION_MODAL,
} from '../../../../renderer/_reducers/_slices/mapSlice';
import appModalMode from '../../../../components/modal/appModalMode';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import { MongoLocation } from '../../kakaoApi/types';
import { moveToRegionInPage } from '../../kakaoApi';

export { Sigungu };

function Sigungu() {
    const currentSido = useAppSelector((state) => state.mapSlice.currentSido);
    const [sigunguList, setSigunguList] = useState<string[] | null>(null);
    const selectedSido = useAppSelector((state) => state.mapSlice.selectedSido);

    useEffect(() => {
        if (selectedSido === '') {
            if (currentSido !== '') {
                const key = currentSido.slice(0, 2);
                const sortList = [...REGION[key]].sort();
                setSigunguList(sortList);
            } else {
                setSigunguList(null);
            }
        } else {
            const key = selectedSido.slice(0, 2);
            const sortList = [...REGION[key]].sort();
            setSigunguList(sortList);
        }
    }, [currentSido, selectedSido]);

    return (
        <div className="container-sigungu">
            <ul>
                <SigunguListItem
                    key={Math.random()}
                    name={`${selectedSido !== '' ? selectedSido.slice(0, 2) : currentSido.slice(0, 2)} 전체`}
                />
                {sigunguList &&
                    sigunguList.map((v) => {
                        return <SigunguListItem key={Math.random()} name={v} />;
                    })}
            </ul>
        </div>
    );
}

function SigunguListItem({ name }: { name: string }) {
    const dispatch = useAppDispatch();
    const selectedSido = useAppSelector((state) => state.mapSlice.selectedSido);
    const currentSido = useAppSelector((state) => state.mapSlice.currentSido);

    // 업종 필터 변경 체크
    const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);

    // 그 지역 좌표들의 중심으로 이동하고
    // 목록으로 띄우기
    const handleClick = () => {
        appModalMode(false);
        dispatch(CHANGE_REGION_MODAL(false));

        dispatch(SET_SELECTED_SIGUNGU(name));

        getListInRegion().then((data) => {
            // 좌표를 저장
            if (data.success && data.lists.length > 0) {
                const coordsInPage: MongoLocation[] = [];

                for (let list of data.lists) {
                    coordsInPage.push(list.location.coordinates);
                }

                // 카카오 index로 보내기
                moveToRegionInPage(coordsInPage);
                // 목록으로 띄우기(모달).
                dispatch(SHOW_LIST_IN_REGION_MODAL(true));

                // 식당리스트 스토어에 저장
                dispatch(SET_LIST_IN_PAGE(data.lists));
                // 토탈 정보 스토어에 저장
                dispatch(SET_TOTAL_IN_REGION(data.total));
            } else {
                // 결과가 없음.
                // 가장 가까운 식당 추천.
                dispatch(NO_RESULT_MODAL(true));
            }
        });
    };

    async function getListInRegion() {
        const sido = selectedSido === '' ? currentSido.slice(0, 2) : selectedSido.slice(0, 2);
        const sigungu = name.includes('전체') ? null : name;

        const res = await fetch(`${API_URL}/map/region?sido=${sido}&sigungu=${sigungu}&page=1&skip=10`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ category: selectedCategory }), // 선택되어 있는 업종으로 필터링
        });
        const data = await res.json();

        return data;
    }

    return (
        <li onClick={handleClick}>
            <p className="txt-sido">{name}</p>
        </li>
    );
}
