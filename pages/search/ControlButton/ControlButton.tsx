import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import { CHANGE_RADIUS_MODAL } from '../../../renderer/_reducers/_slices/mapSlice';
import appModalMode from '../../../components/modal/appModalMode';

export { ControlButton };

function ControlButton() {
    return (
        <div className="wrapper-map-control-button">
            <ChangeRadius />
        </div>
    );
}

function ChangeRadius() {
    const dispatch = useAppDispatch();

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

    const handleClick = () => {
        appModalMode(true);
        dispatch(CHANGE_RADIUS_MODAL(true));
    };

    return (
        <button type="button" onClick={handleClick}>
            <span>반경</span>
            <span>{calcRadius}</span>
            <span>{unit}</span>
        </button>
    );
}
