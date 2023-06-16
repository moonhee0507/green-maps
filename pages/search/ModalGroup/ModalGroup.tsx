import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import {
    CATEGORY_FILTER_MODAL,
    CHANGE_RADIUS_MODAL,
    CHANGE_REGION_MODAL,
    NO_RESULT_MODAL,
    SET_SELECTED_SIDO,
} from '../../../renderer/_reducers/_slices/mapSlice';
import appModalMode from '../../../components/modal/appModalMode';
import { ChangeRadiusModal } from './ChangeRadiusModal/ChangeRadiusModal';
// import { ChangeRegionModal } from './ChangeRegionModal/ChangeRegionModal';
import { ShowListInRegionModal } from './ShowListInRegionModal/ShowListInRegionModal';
import { CategoryFilterModal } from './CategoryFilterModal/CategoryFilterModal';

export { ModalGroup };

function ModalGroup() {
    const on = useAppSelector(
        (state) =>
            state.mapSlice.radiusModalOn ||
            state.mapSlice.checkGeolocationModalOn ||
            state.mapSlice.regionModalOn ||
            state.mapSlice.showListInRegionModalOn ||
            state.mapSlice.categoryFilterModalOn
    );
    const on_mini = useAppSelector((state) => state.mapSlice.noResultModalOn);

    const [show, setShow] = useState(false);
    const [show_mini, setShow_mini] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (on === true) setShow(true);
        else setShow(false);

        if (on_mini === true) setShow_mini(true);
        else setShow_mini(false);
    }, [on, on_mini]);

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

            dispatch(CATEGORY_FILTER_MODAL(false));
        }
    }

    return (
        <>
            <div className={`modal-group ${show ? 'on' : ''}`}>
                <CheckGeolocationModal />
                {/* <ChangeRegionModal /> */}
                <ChangeRadiusModal />
                <ShowListInRegionModal />
                <CategoryFilterModal />
            </div>
            <div className={`mini-modal-group ${show_mini ? 'on' : ''}`}>
                <NoResult />
            </div>
        </>
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

function NoResult() {
    const dispatch = useAppDispatch();

    const [show, setShow] = useState(false);
    const noResultModalOn = useAppSelector((state) => state.mapSlice.noResultModalOn);

    useEffect(() => {
        if (noResultModalOn === true) setShow(true);
        else setShow(false);
    }, [noResultModalOn]);

    useEffect(() => {
        if (show === true) {
            setTimeout(() => {
                setShow(false);
                dispatch(NO_RESULT_MODAL(false));
            }, 2000);
        }
    }, [show]);

    return (
        <div className={`modal-no-result ${show ? 'on' : ''}`}>
            <p>결과가 없습니다 😥</p>
        </div>
    );
}
