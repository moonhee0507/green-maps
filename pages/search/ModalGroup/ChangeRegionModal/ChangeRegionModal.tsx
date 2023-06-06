import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { SET_CURRENT_SIDO } from '../../../../renderer/_reducers/_slices/mapSlice';
import { Sido } from './Sido';
import { Sigungu } from './Sigungu';

export { ChangeRegionModal };

function ChangeRegionModal() {
    const dispatch = useAppDispatch();

    const [show, setShow] = useState(false);
    const regionModalOn = useAppSelector((state) => state.mapSlice.regionModalOn);

    const currentLocation = useAppSelector((state) => state.mapSlice.currentLocation);

    useEffect(() => {
        if (regionModalOn === true) setShow(true);
        else setShow(false);
    }, [regionModalOn]);

    useEffect(() => {
        const [lat, lng] = currentLocation;
        // const [lat, lng] = [37.5666805, 126.9784147]; // 다른 지역 테스트용
        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.coord2RegionCode(lng, lat, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                for (let i = 0; i < result.length; i++) {
                    // 행정동 region-type은 H
                    if (result[i].region_type === 'H') {
                        const addr = result[i].address_name;
                        dispatch(SET_CURRENT_SIDO(addr.split(' ').shift() || ''));
                        break;
                    }
                }
            }
        });
    }, [currentLocation]);

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>지역선택</h4>
            <div className="wrapper-region">
                <Sido />
                <Sigungu />
            </div>
        </article>
    );
}
