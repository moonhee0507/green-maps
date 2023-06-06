import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import {
    CHANGE_RADIUS_MODAL,
    CHANGE_REGION_MODAL,
    SET_SELECTED_SIDO,
} from '../../../renderer/_reducers/_slices/mapSlice';
import appModalMode from '../../../components/modal/appModalMode';
import { ChangeRadiusModal } from './ChangeRadiusModal/ChangeRadiusModal';
import { ChangeRegionModal } from './ChangeRegionModal/ChangeRegionModal';
import { ShowListInRegionModal } from './ShowListInRegionModal/ShowListInRegionModal';

export { ModalGroup };

function ModalGroup() {
    const on = useAppSelector(
        (state) =>
            state.mapSlice.radiusModalOn ||
            state.mapSlice.checkGeolocationModalOn ||
            state.mapSlice.regionModalOn ||
            state.mapSlice.showListInRegionModalOn
    );
    const [show, setShow] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (on === true) setShow(true);
        else setShow(false);
    }, [on]);

    useEffect(() => {
        if (show) {
            document.addEventListener('click', handleClose);
        }

        return () => {
            document.removeEventListener('click', handleClose);
        };
    }, [show]);

    function handleClose(event: MouseEvent) {
        if ((event.target as HTMLElement).className === 'app modal-mode') {
            appModalMode(false);

            dispatch(CHANGE_RADIUS_MODAL(false));

            dispatch(CHANGE_REGION_MODAL(false));
            dispatch(SET_SELECTED_SIDO(''));
        }
    }

    return (
        <div className={`modal-group ${show ? 'on' : ''}`}>
            <CheckGeolocationModal />
            <ChangeRegionModal />
            <ChangeRadiusModal />
            <ShowListInRegionModal />
        </div>
    );
}

function CheckGeolocationModal() {
    const [show, setShow] = useState(false);
    const checkGeolocationModalOn = useAppSelector((state) => state.mapSlice.checkGeolocationModalOn);

    useEffect(() => {
        if (checkGeolocationModalOn === true) setShow(true);
        else setShow(false);
    }, [checkGeolocationModalOn]);

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4 className="sr-only">위치 확인 요청</h4>
            <div className="container-emoji-notice">
                <div className="emoji">📢</div>
                <em>위치 권한을 허용해주세요.</em>
            </div>
        </article>
    );
}
