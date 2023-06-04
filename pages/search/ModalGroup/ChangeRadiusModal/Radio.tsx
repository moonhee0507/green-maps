import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import appModalMode from '../../../../components/modal/appModalMode';
import { CHANGE_RADIUS_MODAL, SET_RADIUS } from '../../../../renderer/_reducers/_slices/mapSlice';

export { Radio };

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
