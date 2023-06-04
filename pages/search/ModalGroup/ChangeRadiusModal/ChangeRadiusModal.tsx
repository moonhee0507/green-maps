import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../renderer/store/hooks';
import { Radio } from './Radio';

export { ChangeRadiusModal };

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
