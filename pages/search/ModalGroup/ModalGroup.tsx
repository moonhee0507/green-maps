import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import { CHANGE_RADIUS_MODAL, SET_RADIUS } from '../../../renderer/_reducers/_slices/mapSlice';
import appModalMode from '../../../components/modal/appModalMode';

export { ModalGroup };

function ModalGroup() {
    const on = useAppSelector((state) => state.mapSlice.radiusModalOn);
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
        }
    }

    return (
        <div className={`modal-group ${show ? 'on' : ''}`}>
            <ChangeRadiusModal />
        </div>
    );
}

function ChangeRadiusModal() {
    const [show, setShow] = useState(false);
    const radiusModalOn = useAppSelector((state) => state.mapSlice.radiusModalOn);
    const radius = useAppSelector((state) => state.mapSlice.radius);

    const [calcRadius, setCalcRadius] = useState(radius);
    const [unit, setUnit] = useState('m');

    useEffect(() => {
        if (radius < 1000) {
            setCalcRadius(radius);
            setUnit('m');
        } else {
            setCalcRadius(radius / 1000);
            setUnit('km');
        }
    }, [radius]);

    useEffect(() => {
        if (radiusModalOn === true) setShow(true);
        else setShow(false);
    }, [radiusModalOn]);

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>내 위치 검색 반경 선택</h4>
            <div className="wrapper-select-radius">
                <p>
                    <span>{calcRadius + unit}</span>
                </p>
                <form className="form-radius">
                    {[300, 500, 1000, 2000, 3000].map((radius) => {
                        return <Radio key={Math.random()} radius={radius} />;
                    })}
                </form>
            </div>
        </article>
    );
}

function Radio({ radius }: { radius: number }) {
    const dispatch = useAppDispatch();

    const selectedRadius = useAppSelector((state) => state.mapSlice.radius);

    const [calcRadius, setCalcRadius] = useState(radius);
    const [unit, setUnit] = useState('m');

    useEffect(() => {
        if (radius < 1000) {
            setCalcRadius(radius);
            setUnit('m');
        } else {
            setCalcRadius(radius / 1000);
            setUnit('km');
        }
    }, [radius]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        appModalMode(false);
        dispatch(SET_RADIUS(Number(target.value)));
        dispatch(CHANGE_RADIUS_MODAL(false));
    };

    return (
        <div className="container-radio-radius">
            <input
                type="radio"
                id={`radius-${radius}`}
                value={radius}
                name="radius"
                onChange={handleChange}
                checked={radius === selectedRadius}
            />
            <label htmlFor={`radius-${radius}`}>{calcRadius + unit}</label>
        </div>
    );
}
